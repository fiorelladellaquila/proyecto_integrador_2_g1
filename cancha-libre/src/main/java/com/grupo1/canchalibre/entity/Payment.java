package com.grupo1.canchalibre.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Payment {

    private long id;
    private int prepayment;
    private boolean paymentStatus;
    private long userId;
    private long shiftId;

    public Payment(long id, int prepayment, boolean paymentStatus, long userId, long shiftId) {
        this.id = id;
        this.prepayment = prepayment;
        this.paymentStatus = paymentStatus;
        this.userId = userId;
        this.shiftId = shiftId;
    }
}
