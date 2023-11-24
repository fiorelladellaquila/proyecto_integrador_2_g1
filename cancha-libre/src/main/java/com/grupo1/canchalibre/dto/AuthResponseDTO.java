package com.grupo1.canchalibre.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponseDTO {
    String token;
    private String username;
    private String name;
    private String lastName;
    private String email;
    private int phone;
}
