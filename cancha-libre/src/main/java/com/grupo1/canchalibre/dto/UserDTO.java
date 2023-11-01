package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserDTO implements Serializable {

    private String name;
    private String lastName;
    private String email;
    private  int phone;

    public UserDTO(User user) {
        this.name = user.getName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
    }
}
