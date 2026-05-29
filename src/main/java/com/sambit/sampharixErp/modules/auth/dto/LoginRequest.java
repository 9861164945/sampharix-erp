package com.sambit.sampharixErp.modules.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {

    private String email;

    private String password;
}