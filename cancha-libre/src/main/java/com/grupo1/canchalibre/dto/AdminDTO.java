package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Admin;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class AdminDTO implements Serializable {

    private String name;
    private String lastName;
    private String email;
    private int phone;

    public AdminDTO(Admin admin) {
        this.name = admin.getName();
        this.lastName = admin.getLastName();
        this.email = admin.getEmail();
        this.phone = admin.getPhone();
    }
}

