package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name="payments")
@NoArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int prepayment;
    private boolean paymentStatus;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shift_id", referencedColumnName = "id")
    private Shift shiftID;

    public Payment(Long id, int prepayment, boolean paymentStatus, Shift shiftID) {
        this.id = id;
        this.prepayment = prepayment;
        this.paymentStatus = paymentStatus;
        this.shiftID = shiftID;
    }
}
