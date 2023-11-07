package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.Date;

@Getter
@Setter
@Data
@Entity
@Table(name="shifts")
@NoArgsConstructor
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //private ZonedDateTime dateTime;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateTime;
    private boolean reserved;
    private long canchaId;
    private long userId;

    public Shift(Long id, Date dateTime, boolean reserved, long canchaId, long userId) {
        this.id = id;
        this.dateTime = dateTime;
        this.reserved = reserved;
        this.canchaId = canchaId;
        this.userId = userId;
    }

    public Shift(Date dateTime, boolean reserved, long canchaId, long userId) {
        this.dateTime = dateTime;
        this.reserved = reserved;
        this.canchaId = canchaId;
        this.userId = userId;
    }
}
