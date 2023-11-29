package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
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
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_time;
    private long soccer_field_id;
    private long user_id;
    private boolean reserved;

    public Shift(Long id, Date date_time, boolean reserved) {
        this.id = id;
        this.date_time = date_time;
        this.reserved = reserved;
    }

    public Shift(Date date_time, boolean reserved, long soccer_field_id, long user_id) {
        this.date_time = date_time;
        this.reserved = reserved;
        this.soccer_field_id = soccer_field_id;
        this.user_id = user_id;
    }
}
