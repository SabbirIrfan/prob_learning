package org.dsi.keriback.Entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

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
    private List<Aids> aids;
    private String  otp;
    private boolean active;
    private boolean walletCreated;
    private LocalDateTime otpGeneratedTime;


}