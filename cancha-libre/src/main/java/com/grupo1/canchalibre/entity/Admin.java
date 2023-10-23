package com.grupo1.canchalibre.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Admin {

    private long id;
    private String name;
    private String lastName;
    private String email;
    private  int phone;
    private String password;

    public Admin(Integer id, String name, String lastName, String email, int phone, String password) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}
