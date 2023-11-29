package com.grupo1.canchalibre.service;

import com.grupo1.canchalibre.dto.SoccerFieldsDTO;
import com.grupo1.canchalibre.dto.UserDTO;
import com.grupo1.canchalibre.dto.UserRegisterDTO;
import com.grupo1.canchalibre.entity.Shift;
import com.grupo1.canchalibre.entity.SoccerFields;
import com.grupo1.canchalibre.entity.User;
import com.grupo1.canchalibre.repository.IUserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUserRepository userRepository;
    @Autowired
    private PasswordEncoder codificador;

    public User findByEmail(String email){
        return userRepository.findByEmail(email).orElseThrow();
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User find(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void delete(Long id){
        this.find(id);
        userRepository.deleteById(id);
    }

    public User update(Long id, UserDTO userDTO) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));

        user.setName(userDTO.getName());
        user.setLastName(userDTO.getLastName());
        user.setPhone(userDTO.getPhone());

        return userRepository.save(user);
    }

    public User renovarPassword(String username, UserRegisterDTO userRegisterDTO) {
        User user = userRepository.findByUsername(username).orElseThrow();
        user.setPassword(codificador.encode(userRegisterDTO.getPassword()));
        return userRepository.save(user);
    }

}
