package com.grupo1.canchalibre.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
public class Shift {

    private long id;
    private ZonedDateTime dateTime;
    private boolean reserved;
    private long canchaId;
    private long userId;

    public Shift(long id, ZonedDateTime dateTime, boolean reserved, long canchaId, long userId) {
        this.id = id;
        this.dateTime = dateTime;
        this.reserved = reserved;
        this.canchaId = canchaId;
        this.userId = userId;
    }
}
