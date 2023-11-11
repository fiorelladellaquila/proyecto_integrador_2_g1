package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.SoccerFields;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SoccerFieldsDTO implements Serializable {

    private Long id;
    private String description;
    private float price;
    private String size;
    private Long admin_id;

    public SoccerFieldsDTO(SoccerFields soccerFields) {
        this.id = soccerFields.getId();
        this.description = soccerFields.getDescription();
        this.price = soccerFields.getPrice();
        this.size = soccerFields.getSize();
        this.admin_id = soccerFields.getAdmin_id();
    }
    public SoccerFieldsDTO() {
        // Default constructor with no arguments
    }
}
