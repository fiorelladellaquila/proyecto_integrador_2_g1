package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Cancha;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CanchaDTO implements Serializable {

    private String description;
    private float price;
    private String size;

    public CanchaDTO(Cancha cancha) {
        this.description = cancha.getDescription();
        this.price = cancha.getPrice();
        this.size = cancha.getSize();
    }
}
