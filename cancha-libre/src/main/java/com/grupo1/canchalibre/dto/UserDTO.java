package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Rol;
import lombok.Data;

import java.io.Serializable;

@Data
public class UserDTO implements Serializable {

    private Long id;
    private String username;
    private String name;
    private String lastName;
    private String email;
    private  int phone;
    private Rol rol;


}
