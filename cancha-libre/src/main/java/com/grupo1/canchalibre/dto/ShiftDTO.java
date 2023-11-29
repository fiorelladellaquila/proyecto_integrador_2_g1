package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Shift;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Date;

@Getter
@Setter
public class ShiftDTO implements Serializable {

    private Date date_time;
    private boolean reserved;
    private long soccer_field_id;
    private long user_id;

    public ShiftDTO(Shift shift) {
        this.date_time = shift.getDate_time();
        this.reserved = shift.isReserved();
        this.soccer_field_id = shift.getSoccer_field_id();
        this.user_id = shift.getUser_id();
    }
}
