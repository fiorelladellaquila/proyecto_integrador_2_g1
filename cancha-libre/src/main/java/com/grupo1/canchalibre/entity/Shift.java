package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Table(name="shifts")
@NoArgsConstructor
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateTime;
    private boolean reserved;

    public Shift(Long id, Date dateTime, boolean reserved) {
        this.id = id;
        this.dateTime = dateTime;
        this.reserved = reserved;
    }
}
