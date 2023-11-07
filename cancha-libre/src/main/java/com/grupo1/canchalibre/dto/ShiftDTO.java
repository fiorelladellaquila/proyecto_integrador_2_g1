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

    private Date dateTime;
    private boolean reserved;
    private long canchaId;
    private long userId;

    public ShiftDTO(Shift shift) {
        this.dateTime = shift.getDateTime();
        this.reserved = shift.isReserved();
        this.canchaId = shift.getCanchaId();
        this.userId = shift.getUserId();
    }
}
