//package com.grupo1.canchalibre.usersSecurity.configuration.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.oauth2.jwt.JwtDecoder;
//import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class OAuth2ResourceServerSecurityConfiguration {
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        return http
//                .oauth2ResourceServer(oauth2ResourceServer -> oauth2ResourceServer.jwt( jwtConfigurer ->
//                        jwtConfigurer.jwtAuthenticationConverter(new KeyCloakJwtAuthenticationConverter())))
//                .cors(AbstractHttpConfigurer::disable).csrf(AbstractHttpConfigurer::disable)
//                .sessionManagement( httpSecuritySessionManagementConfigurer ->
//                        httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests( authorizationManagerRequestMatcherRegistry -> authorizationManagerRequestMatcherRegistry
//                        .anyRequest().authenticated())
//                .build();
//    }
//
//    @Bean
//    public JwtDecoder jwtDecoder() {
//        return NimbusJwtDecoder.withJwkSetUri("http://localhost:8083/realms/cancha-libre/protocol/openid-connect/certs").build();
//    }
//}
