package com.example.userservice.service;

import com.example.userservice.dto.RequestUserDto;
import com.example.userservice.dto.ResponseBookmarkDto;
import com.example.userservice.dto.ResponseUserDto;
import com.example.userservice.jpa.UserEntity;
import com.example.userservice.jpa.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ResponseUserDto createUser(RequestUserDto requestUserDto) {
        requestUserDto.setUserId(UUID.randomUUID().toString());

        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(requestUserDto, userEntity);
        userEntity.setEncryptedPwd(passwordEncoder.encode(requestUserDto.getPwd()));

        userRepository.save(userEntity);

        ResponseUserDto returnUserDto = new ResponseUserDto();
        BeanUtils.copyProperties(userEntity, returnUserDto);

        return returnUserDto;
    }

    @Override
    public ResponseUserDto getUserByUserId(String userId) {
        UserEntity userEntity = userRepository.findByUserId(userId);

        if (userEntity == null)
            throw new UsernameNotFoundException("User not found");

        ResponseUserDto responseUserDto = new ResponseUserDto();
        BeanUtils.copyProperties(userEntity, responseUserDto);

        List<ResponseBookmarkDto> bookmarks = new ArrayList<>();
        responseUserDto.setBookmarks(bookmarks);

        return responseUserDto;
    }

    @Override
    public List<UserEntity> getUserByAll() {
        return userRepository.findAll();
    }
}
