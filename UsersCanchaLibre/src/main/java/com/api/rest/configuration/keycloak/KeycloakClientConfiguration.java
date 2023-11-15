package com.api.rest.configuration.keycloak;

import org.jboss.resteasy.client.jaxrs.internal.ResteasyClientBuilderImpl;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "keycloak")
public class KeycloakClientConfiguration {

    @Value("${keycloak.serverUrl}")
    private String serverUrl;
    @Value("${keycloak.realm}")
    private String realm;
    @Value("${keycloak.clientId}")
    private String clientId;
    @Value("${keycloak.clientSecret}")
    private String clientSecret;
    @Value("${keycloak.user}")
    private String user;
    @Value("${keycloak.password}")
    private String password;

        @Bean
    public Keycloak buildClient() {

        return KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .username(user)
                .password(password)
                .resteasyClient(new ResteasyClientBuilderImpl()
                        .connectionPoolSize(10).build())
                .build();
    }
//    @Bean
//    public Keycloak buildClient() {
//        return KeycloakBuilder.builder().
//                serverUrl(serverUrl)
//                .realm(realm)
//                .clientId(clientId)
//                .clientSecret(clientSecret)
//                .grantType(OAuth2Constants.CLIENT_CREDENTIALS)
//                .build();
//    }
}
