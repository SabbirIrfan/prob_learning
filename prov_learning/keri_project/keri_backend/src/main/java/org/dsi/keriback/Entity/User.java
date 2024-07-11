package org.dsi.keriback.Entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Entity
@Data

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String controllerId;
    private String agentId;
    private String bran;
//    @OneToMany
    @OneToMany
    private List<Aid> aids;
    private String  otp;
    private boolean active;
    private boolean walletCreated;
    private LocalDateTime otpGeneratedTime;


}