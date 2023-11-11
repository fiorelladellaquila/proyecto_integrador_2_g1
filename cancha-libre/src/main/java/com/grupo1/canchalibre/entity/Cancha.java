package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


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
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name ="cancha_id")
    private Set<Shift> shifts;

    public Cancha(Long id, String description, float price, String size) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.size = size;
    }
}
