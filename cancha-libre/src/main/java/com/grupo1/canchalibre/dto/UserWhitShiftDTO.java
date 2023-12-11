package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Shift;;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserWhitShiftDTO {

    private Long id;
    private String username;
    private String name;
    private String lastName;
    private String email;
    private int phone;
    private List<Shift> shifts;

}
