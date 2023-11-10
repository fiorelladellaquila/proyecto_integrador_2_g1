package com.grupo1.canchalibre.usersSecurity.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
@Data
@Getter
@Setter
public class UserDTO {

    private String id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private Set<String> roles;

    public UserDTO(String id, String username, String email, String firstName, String lastName, String password, Set<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.roles = roles;
    }

    public UserDTO(String id, String username, String email, String firstName, String lastName) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;

    }
}
