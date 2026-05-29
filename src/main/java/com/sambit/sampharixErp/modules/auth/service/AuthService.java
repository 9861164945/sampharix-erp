package com.sambit.sampharixErp.modules.auth.service;

import com.sambit.sampharixErp.modules.auth.dto.AuthResponse;
import com.sambit.sampharixErp.modules.auth.dto.LoginRequest;
import com.sambit.sampharixErp.modules.auth.dto.RegisterRequest;

import com.sambit.sampharixErp.security.jwt.JwtService;

import com.sambit.sampharixErp.modules.user.entity.User;
import com.sambit.sampharixErp.modules.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    // =====================================
    // REGISTER
    // =====================================

    public User register(RegisterRequest request) {

        System.out.println("REGISTER API CALLED");

        System.out.println(request.getEmail());

        // Check Email
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {

            throw new RuntimeException("Email already exists");
        }

        User parentUser = null;

        if (request.getParentId() != null) {

            parentUser = userRepository.findById(request.getParentId())
                    .orElseThrow(() ->
                            new RuntimeException("Parent user not found"));
        }

        User user = User.builder()

                .name(request.getName())

                .email(request.getEmail())

                .password(
                        passwordEncoder.encode(request.getPassword())
                )

                .role(request.getRole())

                .phone(request.getPhone())

                .address(request.getAddress())

                .parent(parentUser)

                .active(true)

                .build();

        System.out.println("USER CREATED");

        User savedUser = userRepository.save(user);

        System.out.println("USER SAVED");

        return savedUser;
    }

    // =====================================
    // LOGIN
    // =====================================

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())

                .orElseThrow(() ->
                        new RuntimeException("Invalid Email or Password"));

        // Password Check
        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!passwordMatches) {

            throw new RuntimeException("Invalid Email or Password");
        }

        // Generate JWT
        // Generate JWT
        String token =
                jwtService.generateToken(user.getEmail());

        return AuthResponse.builder()

                .token(token)

                .role(user.getRole().name())

                .build();
    }
}