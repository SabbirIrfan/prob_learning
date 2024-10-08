package org.dsi.keriback.service;


import jakarta.mail.MessagingException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.dsi.keriback.Entity.Aid;
import org.dsi.keriback.Entity.User;
import org.dsi.keriback.dto.*;
import org.dsi.keriback.repository.AidRepository;
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
    @Autowired
    private AidRepository aidRepository;

    public String register(RegisterOtpDto registerDto) {
        Optional<User> optionalUser = userRepository.findByEmail(registerDto.getEmail());
        String otp = otpUtil.generateOtp();
        // fix doing otp verification everytime?
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            try{
                if( Duration.between(user.getOtpGeneratedTime(),
                                LocalDateTime.now()).getSeconds() >= (360000)){
                    user.setOtp(otp);
                    user.setOtpGeneratedTime(LocalDateTime.now());

                }
                emailUtil.sendOtpEmail(registerDto.getEmail(),user.getOtp());
                userRepository.save(user);
                return "email already exists - so new otp sent";

            }catch (MessagingException e){
                throw new RuntimeException("Unable to send otp please try again");
            }

        }
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
                LocalDateTime.now()).getSeconds() < (360000)) {
            user.setActive(true);

            userRepository.save(user);
            if(user.isWalletCreated()){
                return "walletCreated Already";
            }
            else {
                return "ok";
            }

        }
        return "wrong";
    }



    public String createWallet(WalletDto walletDto){
        User user = userRepository.findByEmail(walletDto.getEmail())
                .orElseThrow(()-> new RuntimeException("User not found with this email"+ walletDto.getEmail()));
        user.setName(walletDto.getName());
        user.setControllerId(walletDto.getControllerAid());
        user.setAgentId(walletDto.getAgentAid());
        user.setWalletCreated(true);
        user.setBran(walletDto.getBran());
        userRepository.save(user);

        return "Wallet Creation successful";
    }

    public String createAid(AidDto aidDto){
        Optional<Aid> aidOptional = aidRepository.findByAlias(aidDto.getAlias());
        Optional<User> userOptional = userRepository.findByEmail(aidDto.getEmail());

        if(userOptional.isEmpty()){
            return "wrong email";
        }
        User user =  userOptional.get();
        if(aidOptional.isPresent()){
            return "aid exists";
        }

        Aid aid = new Aid();
        aid.setEmail(aidDto.getEmail());
        aid.setAid(aidDto.getAid());
        aid.setAlias(aidDto.getAlias());
        aid.setOobiUrl(aidDto.getOobiUrl());

        List<Aid> userAids = user.getAids();
        userAids.add(aid);
        aidRepository.save(aid);
        userRepository.save(user);

        return "Aid has been registered";
    }
    public  String getBran(String email){
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found with this email"+ email));
        return user.getBran() ;

    }
}

/*
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
*/
