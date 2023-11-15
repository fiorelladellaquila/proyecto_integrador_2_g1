package com.api.rest.controller;

import com.api.rest.model.UserDTO;
import com.api.rest.model.UserLogin;
import com.api.rest.model.UserResponseDTO;
import com.api.rest.service.IKeycloakService;
import com.api.rest.service.UserService;
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
@RequestMapping("/user")
public class UserKeycloakController {

    @Autowired
    private IKeycloakService keycloakService;
    @Autowired
    private UserService userService;

    @GetMapping("/search")
    @PreAuthorize("hasRole('admin-client-role')")
    public ResponseEntity<?> findAllUsers(){
        return ResponseEntity.ok(keycloakService.findAllUsers());
    }

    @GetMapping("/search/{username}")
    @PreAuthorize("hasAnyRole('user-client-role', 'admin-client-role')")
    public ResponseEntity<?> searchUserByUsername(@PathVariable String username){
        return ResponseEntity.ok(keycloakService.searchUserByUsername(username));
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) throws URISyntaxException {
        String response = keycloakService.createUser(userDTO);
        return ResponseEntity.created(new URI("/user/create")).body(response);
    }

    @PutMapping("/update/{userId}")
    @PreAuthorize("hasAnyRole('user-client-role', 'admin-client-role')")
    public ResponseEntity<?> updateUser(@PathVariable String userId, @RequestBody UserDTO userDTO){
        keycloakService.updateUser(userId, userDTO);
        return ResponseEntity.ok("User updated successfully");
    }

    @DeleteMapping("/delete/{userId}")
    @PreAuthorize("hasAnyRole('admin-client-role')")
    public ResponseEntity<?> deleteUser(@PathVariable String userId){
        keycloakService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLogin userDTO) {
        Unirest.setTimeouts(0, 0);
        HttpResponse<JsonNode> response = null;
        try {
            response = Unirest.post("http://localhost:8083/realms/cancha-libre-dev/protocol/openid-connect/token")
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .field("client_id", "back-cancha-libre")
                    .field("client_secret", "tLtHPrGgwj45Dd0ef18WiYDJAuWl2gNs") //ver aca
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
    @PreAuthorize("hasAnyRole('user-client-role', 'admin-client-role')")
    public ResponseEntity<?> logout(@PathVariable String username) {
        keycloakService.logout(username);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/get/{id}")
    @PreAuthorize("hasAnyRole('user-client-role', 'admin-client-role')")
    public ResponseEntity<UserResponseDTO> searchUserById(@PathVariable String id){
        return ResponseEntity.ok(userService.searchById(id));
    }
}
