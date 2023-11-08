package com.grupo1.canchalibre.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Cancha {

    private long id;
    private String description;
    private float price;
    private String size;

    public Cancha(long id, String description, float price, String size) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.size = size;
    }
}
