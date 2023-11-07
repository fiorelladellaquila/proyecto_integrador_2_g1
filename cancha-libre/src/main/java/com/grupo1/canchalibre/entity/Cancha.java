package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter
//@Setter
@Data
@Entity
@Table(name="soccer-fields")
@NoArgsConstructor
public class Cancha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private float price;
    private String size;

    public Cancha(Long id, String description, float price, String size) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.size = size;
    }
}
