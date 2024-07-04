package org.dsi.keriback.controller;


import org.dsi.keriback.dto.LoginDto;
import org.dsi.keriback.dto.RegisterOtpDto;
import org.dsi.keriback.dto.VerifyOtpDto;
import org.dsi.keriback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterOtpDto registerDto) {
        return new ResponseEntity<>(userService.register(registerDto), HttpStatus.OK);
    }

    @PutMapping("/verify-account")
    public ResponseEntity<String> verifyAccount(@RequestBody VerifyOtpDto verifyOTP) {
        return new ResponseEntity<>(userService.verifyAccount(verifyOTP), HttpStatus.OK);
    }
    @PutMapping("/regenerate-otp")
    public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
        return new ResponseEntity<>(userService.regenerateOtp(email), HttpStatus.OK);
    }
    @PutMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        return new ResponseEntity<>(userService.login(loginDto), HttpStatus.OK);
    }
}