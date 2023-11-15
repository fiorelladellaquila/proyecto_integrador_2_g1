package com.api.rest.service;

import com.api.rest.configuration.keycloak.KeycloakProvider;
import com.api.rest.model.UserDTO;
import com.api.rest.model.UserResponseDTO;
import com.api.rest.repository.KeycloakRepository;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;
import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class UserService implements IKeycloakService {
    @Autowired
    private KeycloakRepository keycloakRepository;

    public List<UserRepresentation> findAllUsers(){
        return KeycloakProvider.getRealmResource().users().list();
    }

    public List<UserRepresentation> searchUserByUsername(String username){
        return KeycloakProvider.getRealmResource().users().searchByUsername(username, true);
    }

    public String createUser(@NonNull UserDTO userDTO){
        int status;
        UsersResource usersResource = KeycloakProvider.getUserResource();

        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setFirstName(userDTO.getFirstName());
        userRepresentation.setLastName(userDTO.getLastName());
        userRepresentation.setEmail(userDTO.getEmail());
        userRepresentation.setUsername(userDTO.getUsername());
        userRepresentation.setEnabled(true);
        userRepresentation.setEmailVerified(true);

        Response response = usersResource.create(userRepresentation);

        status = response.getStatus();

        if (status == 201) {
            String path = response.getLocation().getPath();
            String userId = path.substring(path.lastIndexOf("/") + 1); //buscamos el user desde la url despues del ultimo /

            CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
            credentialRepresentation.setTemporary(false);
            credentialRepresentation.setType(OAuth2Constants.PASSWORD);
            credentialRepresentation.setValue(userDTO.getPassword());

            usersResource.get(userId).resetPassword(credentialRepresentation);

            RealmResource realmResource = KeycloakProvider.getRealmResource();

            List<RoleRepresentation> rolesRepresentation;

            if (userDTO.getRoles() == null || userDTO.getRoles().isEmpty()) {
                rolesRepresentation = List.of(realmResource.roles().get("user").toRepresentation());
            } else {
                rolesRepresentation = realmResource.roles()
                        .list()
                        .stream()
                        .filter(role -> userDTO.getRoles()
                                .stream()
                                .anyMatch(roleName -> roleName.equalsIgnoreCase(role.getName())))
                        .toList();
            }

            realmResource.users().get(userId).roles().realmLevel().add(rolesRepresentation);

            return "User created successfully!!";

        } else if (status == 409) {
            log.error("User exist already!");
            return "User exist already!";
        } else {
            log.error("Error creating user");
            return "Error creating user, please contact with the administrator.";
        }
    }

    public void deleteUser(String userId){
        KeycloakProvider.getUserResource()
                .get(userId)
                .remove();
    }

    public void updateUser(String userId, @NonNull UserDTO userDTO){

        CredentialRepresentation credentialRepresentation = new CredentialRepresentation();
        credentialRepresentation.setTemporary(false);
        credentialRepresentation.setType(OAuth2Constants.PASSWORD);
        credentialRepresentation.setValue(userDTO.getPassword());

        UserRepresentation user = new UserRepresentation();
        user.setUsername(userDTO.getUsername());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setEnabled(true);
        user.setEmailVerified(true);
        user.setCredentials(Collections.singletonList(credentialRepresentation));

        UserResource usersResource = KeycloakProvider.getUserResource().get(userId);
        usersResource.update(user);
    }

    public void logout(String username){
        String userId= null;
        if (username != null){
            UserRepresentation user = searchUserByUsername(username).get(0);
            if (user != null){
                userId= user.getId();
            }
        }
        RealmResource realmResource = KeycloakProvider.getRealmResource();
        realmResource.users().get(userId).logout();
    }

    public UserResponseDTO searchById(String id){
        return keycloakRepository.findById(id);
    }
}
