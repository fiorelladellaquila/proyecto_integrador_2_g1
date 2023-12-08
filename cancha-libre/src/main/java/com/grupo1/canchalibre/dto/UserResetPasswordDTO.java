package com.grupo1.canchalibre.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserResetPasswordDTO {
    private String password;
    private String code;
    private String email;
}
