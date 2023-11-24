package com.grupo1.canchalibre.security;

import com.grupo1.canchalibre.entity.Rol;
import com.grupo1.canchalibre.entity.User;
import com.grupo1.canchalibre.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CargaDatos implements ApplicationRunner {
    @Autowired
    IUserRepository usuarioRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {
       /* BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = "digital";
        String passHash = passwordEncoder.encode(password);
        User usuario = new User();
        usuario.setName("Nicolas");
        usuario.setLastName("Montero");
        usuario.setEmail("nico.monterosabeli@gmail.com");
        usuario.setUsername("nico.monterosabeli@gmail.com");
        usuario.setPassword(passHash);
        usuario.setRol(Rol.ROLE_ADMIN);
        usuarioRepository.save(usuario);*/

    }
}