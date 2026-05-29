package com.sambit.sampharixErp.modules.auth.dto;

import com.sambit.sampharixErp.modules.user.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Role role;

    private String phone;

    private String address;

    private Long parentId;
}