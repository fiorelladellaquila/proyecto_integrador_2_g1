package com.grupo1.canchalibre.usersSecurity.configuration.keycloak;

import org.jboss.resteasy.client.jaxrs.internal.ResteasyClientBuilderImpl;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UsersResource;

public class KeycloakProvider {

    private static final String SERVER_URL = "http://localhost:8083";
    private static final String REALM_NAME = "cancha-libre";
    private static final String REALM_MASTER = "master";
    private static final String CLIENT_ID = "back-cancha-libre";
    private static final String USER_NAME = "admin";
    private static final String PASSWORD = "admin";
    private static final String CLIENT_SECRET = "7bIrudGVvDefweMsITY7YvQpYqUXz1Hm";

    public static RealmResource getRealmResource(){
        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(SERVER_URL)
                .realm(REALM_MASTER)
                .clientId(CLIENT_ID)
                .username(USER_NAME)
                .password(PASSWORD)
                .clientSecret(CLIENT_SECRET)
                .resteasyClient(new ResteasyClientBuilderImpl()
                        .connectionPoolSize(10)
                        .build())
                .build();

        return keycloak.realm(REALM_NAME);
    }

    public static UsersResource getUserResource() {
        RealmResource realmResource = getRealmResource();
        return realmResource.users();
    }
}
