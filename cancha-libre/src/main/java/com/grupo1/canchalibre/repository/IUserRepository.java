package com.grupo1.canchalibre.repository;

import com.grupo1.canchalibre.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);
    User findByVerificationCode(String verificationCode);

    @Query("SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.shifts")
    List<User> findUsersWithShifts();
}
