package com.grupo1.canchalibre.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @PostMapping(value = "/login")
    public String login(){
        return "";
    }

    @PostMapping(value = "/register")
    public String register(){
        return "";
    }
}
