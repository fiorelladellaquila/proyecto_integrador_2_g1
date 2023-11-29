package com.grupo1.canchalibre.controller;

import com.grupo1.canchalibre.dto.AuthResponseDTO;
import com.grupo1.canchalibre.dto.UserLoginDTO;
import com.grupo1.canchalibre.dto.UserRegisterDTO;
import com.grupo1.canchalibre.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody UserLoginDTO request)
    {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody UserRegisterDTO request)
    {
        return ResponseEntity.ok(authService.register(request));
    }

}
