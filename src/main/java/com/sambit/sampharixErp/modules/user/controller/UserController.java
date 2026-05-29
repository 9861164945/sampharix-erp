package com.sambit.sampharixErp.modules.user.controller;



import com.sambit.sampharixErp.modules.user.entity.User;
import com.sambit.sampharixErp.modules.user.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();

    }
}