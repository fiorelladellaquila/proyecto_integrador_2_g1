//package com.grupo1.canchalibre.usersSecurity.configuration.security;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.core.convert.converter.Converter;
//import org.springframework.security.authentication.AbstractAuthenticationToken;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.oauth2.jwt.Jwt;
//import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
//import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
//
//import java.util.Collection;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//public class KeyCloakJwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {
//
//    private static final Logger log = LoggerFactory.getLogger(KeyCloakJwtAuthenticationConverter.class);
//    private static final String CLAIMS = "claims";
//    private final JwtGrantedAuthoritiesConverter defaultGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
//
//
//    @Override
//    public AbstractAuthenticationToken convert(final Jwt source) {
//        Collection<GrantedAuthority> authorities = null;
//        try {
//            authorities = this.getGrantedAuthorities(source);
//        } catch (JsonProcessingException e){
//            e.printStackTrace();
//        }
//        return new JwtAuthenticationToken(source, authorities);    }
//
//    private Collection<GrantedAuthority> getGrantedAuthorities(Jwt source) throws JsonProcessingException {
//        return Stream.concat(this.defaultGrantedAuthoritiesConverter.convert(source).stream(),
//                extractResourceRoles(source).stream()).collect(Collectors.toSet());
//    }
//
//    private static Collection<? extends GrantedAuthority> extractResourceRoles(final Jwt jwt) throws JsonProcessingException{
//        Set<GrantedAuthority> resourcesRoles = new HashSet<>();
//        ObjectMapper objectMapper = new ObjectMapper();
//        objectMapper.registerModule(new JavaTimeModule());
//        resourcesRoles.addAll(extractResourceRoles(objectMapper.readTree(objectMapper.writeValueAsString(jwt)).get(CLAIMS)));
//        resourcesRoles.addAll(extractRealmRoles(objectMapper.readTree(objectMapper.writeValueAsString(jwt)).get(CLAIMS)));
//        resourcesRoles.addAll(extractAud(objectMapper.readTree(objectMapper.writeValueAsString(jwt)).get(CLAIMS)));
//        resourcesRoles.addAll(extractScope(objectMapper.readTree(objectMapper.writeValueAsString(jwt)).get(CLAIMS)));
//        resourcesRoles.addAll(extractGroups(objectMapper.readTree(objectMapper.writeValueAsString(jwt)).get(CLAIMS)));
//        log.info("extractResourceRoles -> {}", resourcesRoles);
//        return resourcesRoles;
//    }
//
//    private static List<GrantedAuthority> extractResourceRoles(JsonNode jwt) {
//        Set<String> rolesWithPrefix = new HashSet<>();
//
//        jwt.path("resource_access")
//                .elements()
//                .forEachRemaining(e -> e.path("roles")
//                        .elements()
//                        .forEachRemaining(r -> rolesWithPrefix.add("ROLE_" + r.asText())));
//
//        return AuthorityUtils.createAuthorityList(rolesWithPrefix.toArray(new String[0]));
//    }
//
//    private static List<GrantedAuthority> extractRealmRoles(JsonNode jwt) {
//        Set<String> rolesWithPrefix = new HashSet<>();
//
//        jwt.path("realm_access").path("roles")
//                .elements()
//                .forEachRemaining(r -> rolesWithPrefix.add("ROLE_" + r.asText()));
//
//        return AuthorityUtils.createAuthorityList(rolesWithPrefix.toArray(new String[0]));
//    }
//
//    public static List<GrantedAuthority> extractAud(JsonNode jwt){
//        Set<String> audienciaWhitPrefix = new HashSet<>();
//
//        jwt.path("aud")
//                .elements()
//                .forEachRemaining(e -> audienciaWhitPrefix.add("AUD_" + e.asText()));
//
//        return AuthorityUtils.createAuthorityList(audienciaWhitPrefix.toArray(new String[0]));
//    }
//
//    public static List<GrantedAuthority> extractScope(JsonNode jwt){
//        Set<String> scopeWhitPrefix = new HashSet<>();
//
//        jwt.path("scope")
//                .elements()
//                .forEachRemaining(e -> scopeWhitPrefix.add("SCOPE_" + e.asText()));
//
//        return AuthorityUtils.createAuthorityList(scopeWhitPrefix.toArray(new String[0]));
//    }
//
//    public static List<GrantedAuthority> extractGroups(JsonNode jwt) {
//        Set<String> groupsWithPrefix = new HashSet<>();
//
//        jwt.path("groups")
//                .elements()
//                .forEachRemaining(g -> groupsWithPrefix.add("GROUP_" + g.asText()));
//
//        return AuthorityUtils.createAuthorityList(groupsWithPrefix.toArray(new String[0]));
//    }
//}
