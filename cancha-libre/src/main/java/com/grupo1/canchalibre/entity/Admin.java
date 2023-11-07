package com.grupo1.canchalibre.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

//@Getter
//@Setter
@Data
@Entity
@Table(name="administrators")
@NoArgsConstructor
public class Admin {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String email;
    @Column(name="telephoneNumber", nullable = false, length=20, unique = true)
    private int phone;
    private String password;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name ="admin_id")
    private Set<Cancha> canchas;

    public Admin(Long id, String name, String lastName, String email, int phone, String password) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

}
