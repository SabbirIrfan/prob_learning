package org.dsi.keriback.controller;


import org.apache.catalina.core.ApplicationFilterChain;
import org.dsi.keriback.dto.LoginDto;
import org.dsi.keriback.dto.RegisterOtpDto;
import org.dsi.keriback.dto.VerifyOtpDto;
import org.dsi.keriback.dto.WalletDto;
import org.dsi.keriback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRange;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/createWallet")
    public  ResponseEntity<String > createWallet(@RequestBody WalletDto walletDto){

        return new ResponseEntity<>(userService.createWallet(walletDto), HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterOtpDto registerDto) {
        return new ResponseEntity<>(userService.register(registerDto), HttpStatus.OK);
    }

    @PutMapping("/verify-account")
    public ResponseEntity<String> verifyAccount(@RequestBody VerifyOtpDto verifyOTP) {
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        if(Objects.equals(userService.verifyAccount(verifyOTP), "ok")){
            return new ResponseEntity<>( HttpStatus.OK);
        }
        else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: "+ "OTP does not match");



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