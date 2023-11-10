package com.grupo1.canchalibre.usersSecurity.controller;

import com.grupo1.canchalibre.usersSecurity.model.UserDTO;
import com.grupo1.canchalibre.usersSecurity.model.UserLogin;
import com.grupo1.canchalibre.usersSecurity.service.UserSecurityService;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/users/")
public class UserKeycloakController {

    @Autowired
    private UserSecurityService keycloakService;

    @GetMapping("/search")
    @PreAuthorize("hasRole('admin_client_role')")
    public ResponseEntity<?> findAllUsers(){
        return ResponseEntity.ok(keycloakService.findAllUsers());
    }

    @GetMapping("/search/{username}")
    @PreAuthorize("hasAnyRole('user_client_role', 'admin_client_role')")
    public ResponseEntity<?> searchUserByUsername(@PathVariable String username){
        return ResponseEntity.ok(keycloakService.searchUserByUsername(username));
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) throws URISyntaxException {
        String response = keycloakService.createUser(userDTO);
        return ResponseEntity.created(new URI("/keycloak/user/create")).body(response);
    }

    @PutMapping("/update/{userId}")
    @PreAuthorize("hasAnyRole('user_client_role', 'admin_client_role')")
    public ResponseEntity<?> updateUser(@PathVariable String userId, @RequestBody UserDTO userDTO){
        keycloakService.updateUser(userId, userDTO);
        return ResponseEntity.ok("User updated successfully");
    }

    @DeleteMapping("/delete/{userId}")
    @PreAuthorize("hasAnyRole('admin_client_role')")
    public ResponseEntity<?> deleteUser(@PathVariable String userId){
        keycloakService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLogin userDTO) {
        Unirest.setTimeouts(0, 0);
        HttpResponse<JsonNode> response = null;
        try {
            response = Unirest.post("http://localhost:8083/realms/cancha-libre/protocol/openid-connect/token")
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .field("client_id", "back-cancha-libre")
                    .field("client_secret", "7bIrudGVvDefweMsITY7YvQpYqUXz1Hm") //ver aca
                    .field("username", userDTO.getUsername())
                    .field("password", userDTO.getPassword())
                    .field("grant_type", "password")
                    .asJson();
        }catch (Exception e){
            e.printStackTrace();
        }
        if (response != null && response.getStatus() == 200 && response.getBody() != null){
            JSONObject json = response.getBody().getObject();
            String accessToken = json.getString("access_token");
            return ResponseEntity.ok(accessToken);
        }else {
            return (ResponseEntity<?>) ResponseEntity.notFound();
        }
    }

    @GetMapping("/logout/{username}")
    @PreAuthorize("hasAnyRole('user_client_role', 'admin_client_role')")
    public ResponseEntity<?> logout(@PathVariable String username) {
        keycloakService.logout(username);
        return ResponseEntity.noContent().build();
    }
}
