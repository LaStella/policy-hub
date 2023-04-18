package com.example.userservice.service;

import com.example.userservice.dto.RequestUserDto;
import com.example.userservice.dto.ResponseUserDto;
import com.example.userservice.jpa.UserEntity;

import java.util.List;

public interface UserService {
    ResponseUserDto createUser(RequestUserDto userDto);

    ResponseUserDto getUserByUserId(String userId);

    List<UserEntity> getUserByAll();
}
