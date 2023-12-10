package com.grupo1.canchalibre.dto;

import com.grupo1.canchalibre.entity.Payment;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PaymentDTO implements Serializable {

    private int prepayment;
    private boolean paymentStatus;

    public PaymentDTO(Payment payment) {
        this.prepayment = payment.getPrepayment();
        this.paymentStatus = payment.isPaymentStatus();
    }
}
