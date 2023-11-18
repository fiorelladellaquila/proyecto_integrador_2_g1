package com.grupo1.canchalibre.repository;

import com.grupo1.canchalibre.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

//    User findByEmail(String email);
//
//    User findByVerificationCode(String verificationCode);

    Optional<User> findByUsername(String username);

}
