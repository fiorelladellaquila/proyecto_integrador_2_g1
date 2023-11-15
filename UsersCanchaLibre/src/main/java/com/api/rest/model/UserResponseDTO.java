package com.api.rest.model;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

import java.util.List;


@Value
@RequiredArgsConstructor
@Builder
public class UserResponseDTO {

    private String id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private List<String> roles;
}
