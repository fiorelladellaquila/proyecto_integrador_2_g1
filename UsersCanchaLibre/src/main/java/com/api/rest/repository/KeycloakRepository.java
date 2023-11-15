package com.api.rest.repository;

import com.api.rest.model.UserDTO;
import com.api.rest.model.UserResponseDTO;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

@Repository
public class KeycloakRepository {

    @Autowired
    private Keycloak keycloak;
    @Value("${keycloak.realm}")
    private String realm;

    public UserResponseDTO findById(String id) {
        UserRepresentation userRepresentation = keycloak
                .realm(realm)
                .users()
                .get(id)
                .toRepresentation();
        return fromRepresentation(userRepresentation);
    }

    private UserResponseDTO fromRepresentation(UserRepresentation userRepresentation) {
        return new UserResponseDTO(userRepresentation.getId(),userRepresentation.getUsername(),
                userRepresentation.getFirstName(),userRepresentation.getLastName(),
                userRepresentation.getEmail(), userRepresentation.getRealmRoles());
    }
}
