package com.grupo1.canchalibre.repository;

import com.grupo1.canchalibre.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    User findByVerificationCode(String verificationCode);
}
