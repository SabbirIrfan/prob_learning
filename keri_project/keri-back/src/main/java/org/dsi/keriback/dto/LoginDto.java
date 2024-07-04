package org.dsi.keriback.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDto {

    private String email;
    private String otp;
}