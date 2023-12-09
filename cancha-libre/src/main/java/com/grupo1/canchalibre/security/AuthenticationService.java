package com.grupo1.canchalibre.security;

import com.grupo1.canchalibre.dto.AuthResponseDTO;
import com.grupo1.canchalibre.dto.UserLoginDTO;
import com.grupo1.canchalibre.dto.UserRegisterDTO;
import com.grupo1.canchalibre.dto.UserResetPasswordDTO;
import com.grupo1.canchalibre.entity.Rol;
import com.grupo1.canchalibre.entity.User;
import com.grupo1.canchalibre.repository.IUserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final IUserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final JavaMailSender mailSender;
    @Autowired
    private PasswordEncoder codificador;

    public AuthResponseDTO login(UserLoginDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponseDTO.builder()
                .token(token)
                .username(user.getUsername())
                .name(user.getName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .build();
    }

    public AuthResponseDTO register(UserRegisterDTO request) throws MessagingException, UnsupportedEncodingException {
        User user = User.builder()
                .username(request.getUsername())
                .name(request.getName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .password(passwordEncoder.encode(request.getPassword()))
                .rol(Rol.ROLE_USER)
                .build();

        double num = 10000 + Math.random() * 90000;
        String randomCode = Integer.toString((int) num);
        user.setVerificationCode(randomCode);
        user.setEnabled(false);

        sendVerificationEmail(user);

        userRepository.save(user);

        return AuthResponseDTO.builder()
                .token(jwtService.getToken(user))
                .username(request.getUsername())
                .name(request.getName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .build();

    }


    public void sendVerificationEmail(User user) throws MessagingException, UnsupportedEncodingException {
        try {
            String toAddress = user.getEmail();
            String senderName = "Cancha Libre";
            String subject = "Please verify your registration";
            String content = "Dear [[name]],<br>"
                    + "Please click the link below to verify your registration:<br>"
                    + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                    + "Thank you,<br>"
                    + "Cancha Libre Support.";

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);

            helper.setFrom("canchalibreapp@gmail.com", senderName);
            helper.setTo(toAddress);
            helper.setSubject(subject);

            content = content.replace("[[name]]", user.getUsername());

            String verifyURL = "https://localhost:3000" + "/verify-confirmation?code=" + user.getVerificationCode();

            content = content.replace("[[URL]]", verifyURL);

            helper.setText(content, true);

            mailSender.send(message);
        }
        catch (MailSendException e){
            throw new MailSendException("The email is not a valid address");
        }
    }

    public boolean verify(String verificationCode) {
        User user = userRepository.findByVerificationCode(verificationCode);

        if (user == null ) {
            return false;
        } else {
            user.setEnabled(true);
            userRepository.save(user);
            return true;
        }
    }


    public void renovarPasswordSendCode(String email) throws MessagingException, UnsupportedEncodingException {
        try {
            User user1 = userRepository.findByEmail(email).orElseThrow();

            String toAddress = email;
            String senderName = "Cancha Libre";
            String subject = "Please reset your password";
            String content = "Dear [[name]],<br>"
                    + "Please click the link below to reset your password:<br>"
                    + "<h3><a href=\"[[URL]]\" target=\"_self\">RESET PASSWORD</a></h3>"
                    + "Thank you,<br>"
                    + "Cancha Libre Support.";

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);

            helper.setFrom("canchalibreapp@gmail.com", senderName);
            helper.setTo(toAddress);
            helper.setSubject(subject);

            content = content.replace("[[name]]", user1.getUsername());

            String verifyURL = "http://localhost:3000/reset_password?code=" + user1.getVerificationCode() + "&email=" + email;

            content = content.replace("[[URL]]", verifyURL);

            helper.setText(content, true);

            mailSender.send(message);
        }
        catch (MailSendException e){
            throw new MailSendException("The email is not a valid address");
        }
    }

    public boolean renovarPassword(String email, UserResetPasswordDTO userRegisterDTO) {
        User user = userRepository.findByEmail(email).orElseThrow();
        if(!user.getVerificationCode().equals( userRegisterDTO.getCode())){
            return false;
        }
        user.setPassword(codificador.encode(userRegisterDTO.getPassword()));
        userRepository.save(user);
        return true;
    }
}
