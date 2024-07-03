package org.dsi.emailwebapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @RequestMapping("/welcome")
    public String welcome(){
        return "something";
    }
}
