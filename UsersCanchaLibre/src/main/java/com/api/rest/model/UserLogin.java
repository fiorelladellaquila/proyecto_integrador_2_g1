package com.api.rest.model;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

@Value
@RequiredArgsConstructor
@Builder
public class UserLogin {
    private String username;
    private String password;
}
