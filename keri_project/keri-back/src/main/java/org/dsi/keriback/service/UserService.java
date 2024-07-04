package org.dsi.keriback.service;


import jakarta.mail.MessagingException;
import java.time.Duration;
import java.time.LocalDateTime;

import org.dsi.keriback.Entity.User;
import org.dsi.keriback.dto.LoginDto;
import org.dsi.keriback.dto.RegisterOtpDto;
import org.dsi.keriback.dto.VerifyOtpDto;
import org.dsi.keriback.repository.UserRepository;
import org.dsi.keriback.util.EmailUtil;
import org.dsi.keriback.util.OtpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private OtpUtil otpUtil;
    @Autowired
    private EmailUtil emailUtil;
    @Autowired
    private UserRepository userRepository;

    public String register(RegisterOtpDto registerDto) {
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(registerDto.getEmail(), otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        User user = new User();
        user.setEmail(registerDto.getEmail());
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "User registration successful";
    }

    public String verifyAccount(VerifyOtpDto verifyOTP) {
        String email = verifyOTP.getEmail();
        String otp = verifyOTP.getOtp();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
        if (user.getOtp().equals(otp) && Duration.between(user.getOtpGeneratedTime(),
                LocalDateTime.now()).getSeconds() < (60)) {
            user.setActive(true);
            userRepository.save(user);
            return "ok";
        }
        return "wrong";
    }

    public String regenerateOtp(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(email, otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "Email sent... please verify account within 1 minute";
    }

    public String login(LoginDto loginDto) {
        User user = userRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(
                        () -> new RuntimeException("User not found with this email: " + loginDto.getEmail()));
        if (!loginDto.getOtp().equals(user.getOtp())) {
            return "otp is incorrect";
        } else if (!user.isActive()) {
            return "your account is not verified";
        }
        return "Login successful";
    }
}