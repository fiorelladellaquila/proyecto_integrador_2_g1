package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Shift;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.ZonedDateTime;

@Getter
@Setter
public class ShiftDTO implements Serializable {

    private ZonedDateTime dateTime;
    private boolean reserved;

    public ShiftDTO(Shift shift) {
        this.dateTime = shift.getDateTime();
        this.reserved = shift.isReserved();
    }
}
