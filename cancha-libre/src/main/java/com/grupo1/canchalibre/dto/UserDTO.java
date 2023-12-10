package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {

    private String name;
    private String lastName;
    private  int phone;

    public UserDTO(User user) {
        this.name = user.getName();
        this.lastName = user.getLastName();
        this.phone = user.getPhone();
    }
}
