package org.dsi.keriback.controller;


import org.apache.catalina.core.ApplicationFilterChain;
import org.dsi.keriback.dto.*;
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

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterOtpDto registerDto) {
        return new ResponseEntity<>(userService.register(registerDto), HttpStatus.OK);
    }

    @PostMapping("/createWallet")
    public  ResponseEntity<String > createWallet(@RequestBody WalletDto walletDto){
        return new ResponseEntity<>(userService.createWallet(walletDto), HttpStatus.OK);
    }
    @PostMapping("/create-aid")
    public ResponseEntity<String> createAid(@RequestBody AidDto aidDto){
        return new ResponseEntity<>(userService.createAid(aidDto), HttpStatus.OK);

    }

    @PutMapping("/verify-account")
    public ResponseEntity<String> verifyAccount(@RequestBody VerifyOtpDto verifyOTP) {
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        String verificationResult = userService.verifyAccount(verifyOTP);
        if(Objects.equals(verificationResult, "ok")){
            return new ResponseEntity<>( HttpStatus.OK);
        }
        else if(Objects.equals(verificationResult, "walletCreated Already")){
//            System.out.println(":HERE");
            return new ResponseEntity<>( HttpStatus.OK); // httpstatus.valueof(203) after i can get the client from agent
        }

        else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: "+ "OTP does not match");



    }
    @GetMapping("/getBran")
    public String getBran(@RequestParam  String email ){
            return userService.getBran(email);
    }


}
/*
    @PutMapping("/regenerate-otp")
    public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
        return new ResponseEntity<>(userService.regenerateOtp(email), HttpStatus.OK);
    }
    @PutMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        return new ResponseEntity<>(userService.login(loginDto), HttpStatus.OK);
    }

 */