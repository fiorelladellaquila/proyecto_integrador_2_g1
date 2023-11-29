package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@Data
@Entity
@Table(name="soccer-fields")
@NoArgsConstructor
public class SoccerFields {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private float price;
    private String size;
    private Long admin_id;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name ="soccer_field_id")
    private Set<Shift> shifts;

    public SoccerFields(Long id, String description, float price, String size, Long admin_id) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.size = size;
        this.admin_id = admin_id;
    }
}
