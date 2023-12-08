package com.grupo1.canchalibre.controller;

import com.grupo1.canchalibre.dto.AuthResponseDTO;
import com.grupo1.canchalibre.dto.UserEmailDTO;
import com.grupo1.canchalibre.dto.UserLoginDTO;
import com.grupo1.canchalibre.dto.UserRegisterDTO;
import com.grupo1.canchalibre.dto.UserResetPasswordDTO;
import com.grupo1.canchalibre.dto.UserVerifyCodeDTO;
import com.grupo1.canchalibre.entity.User;
import com.grupo1.canchalibre.security.AuthenticationService;
import jakarta.mail.MessagingException;
import jakarta.ws.rs.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

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
    public ResponseEntity<AuthResponseDTO> register(@RequestBody UserRegisterDTO request) throws MessagingException, UnsupportedEncodingException {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/verify/code")
    public ResponseEntity<String> verifyUser(@RequestBody UserVerifyCodeDTO userVerifyCodeDTO) throws BadRequestException {
        if (authService.verify(userVerifyCodeDTO.getCode())) {
            return ResponseEntity.ok().build();
        } else {
            throw new BadRequestException("Error verificating user");
        }
    }

    @GetMapping()
    public void resetPasswordSendCode(@RequestBody UserEmailDTO email) throws MessagingException, UnsupportedEncodingException {
        authService.renovarPasswordSendCode(email.getEmail());
    }

    @PutMapping("/password")
    public ResponseEntity<String>  renovarPassword( @RequestBody UserResetPasswordDTO userResetPasswordDTO){
        return ResponseEntity.ok( authService.renovarPassword(userResetPasswordDTO.getEmail(), userResetPasswordDTO));
    }

}
