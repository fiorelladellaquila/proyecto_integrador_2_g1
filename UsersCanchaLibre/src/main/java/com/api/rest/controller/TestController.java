package com.api.rest.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/hello")
    @PreAuthorize("hasRole('admin-client-role')")
    public String helloAdmin(){
        return "Hello Cancha Libre - ADMIN";
    }

    @GetMapping("/hellouser")
    @PreAuthorize("hasRole('user-client-role') or hasRole('admin-client-role')")
    public String helloUser(){
        return "Hello Cancha Libre - USER";
    }

}
