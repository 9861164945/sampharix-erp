package com.sambit.sampharixErp.modules.auth.controller;

import com.sambit.sampharixErp.modules.auth.dto.AuthResponse;
import com.sambit.sampharixErp.modules.auth.dto.LoginRequest;
import com.sambit.sampharixErp.modules.auth.dto.RegisterRequest;

import com.sambit.sampharixErp.modules.auth.service.AuthService;

import com.sambit.sampharixErp.modules.user.entity.User;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/auth")
@Slf4j
@RequiredArgsConstructor

public class AuthController {

    private final AuthService authService;

    // =====================================
    // REGISTER
    // =====================================

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {

        User savedUser = authService.register(request);
        log.info("Registration Done Successfully");
        return ResponseEntity.ok(savedUser);


    }

    // =====================================
    // LOGIN
    // =====================================

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request
    ) {

        return ResponseEntity.ok(
                authService.login(request)
        );
    }
}