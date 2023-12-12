package com.grupo1.canchalibre.controller;

import com.grupo1.canchalibre.dto.*;
import com.grupo1.canchalibre.exception.BadRequestException;
import com.grupo1.canchalibre.repository.IUserRepository;
import com.grupo1.canchalibre.security.AuthenticationService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
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
    public ResponseEntity<AuthResponseDTO> register(@RequestBody UserRegisterDTO request) throws MessagingException, UnsupportedEncodingException {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/mail")
    public void resetPasswordSendCode(@RequestBody UserEmailDTO email) throws MessagingException, UnsupportedEncodingException {
        authService.renovarPasswordSendCode(email.getEmail());
    }

    @PutMapping("/password")
    public ResponseEntity<String>  renovarPassword( @RequestBody UserResetPasswordDTO userResetPasswordDTO) throws BadRequestException{
        if (authService.renovarPassword(userResetPasswordDTO.getEmail(), userResetPasswordDTO)) {
            return ResponseEntity.ok().build();
        }
        throw new BadRequestException("Error verificating user");
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyUser(@RequestBody UserVerifyCodeDTO userVerifyCodeDTO) throws BadRequestException {
        if (authService.verify(userVerifyCodeDTO.getCode())) {
            return ResponseEntity.ok().build();
        } else {
            //throw new BadRequestException("Error verificating user");
            return ResponseEntity.badRequest().build();
        }
    }

}
