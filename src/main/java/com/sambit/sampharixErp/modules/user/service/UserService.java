package com.sambit.sampharixErp.modules.user.service;




import com.sambit.sampharixErp.modules.user.entity.User;
import com.sambit.sampharixErp.modules.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {

        return userRepository.findAll();

    }
}