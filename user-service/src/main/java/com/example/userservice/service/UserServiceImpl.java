package com.example.userservice.service;

import com.example.userservice.client.BookmarkServiceClient;
import com.example.userservice.dto.UserDto;
import com.example.userservice.dto.ResponseBookmarkDto;
import com.example.userservice.dto.ResponseUserDto;
import com.example.userservice.jpa.UserEntity;
import com.example.userservice.jpa.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
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

    BookmarkServiceClient bookmarkServiceClient;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           BCryptPasswordEncoder passwordEncoder,
                           BookmarkServiceClient bookmarkServiceClient) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.bookmarkServiceClient = bookmarkServiceClient;
    }

    @Override
    public ResponseUserDto createUser(UserDto userDto) {
        userDto.setUserId(UUID.randomUUID().toString());

        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(userDto, userEntity);
        userEntity.setEncryptedPassword(passwordEncoder.encode(userDto.getPassword()));

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

        List<ResponseBookmarkDto> bookmarks = bookmarkServiceClient.getBookmarks(userId);
        responseUserDto.setBookmarks(bookmarks);

        return responseUserDto;
    }

    @Override
    public List<UserEntity> getUserByAll() {
        return userRepository.findAll();
    }

    @Override
    public UserDto getUserDetailsByEmail(String email) {
        UserEntity userEntity = userRepository.findByEmail(email);

        if (userEntity == null)
            throw new UsernameNotFoundException(email);

        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity, userDto);

        return userDto;
    }

    // 레포지터리에서 데이터를 가져와 검사합니다.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 여기서 username은 RequestLogin에서 사용하는 email입니다.
        UserEntity userEntity = userRepository.findByEmail(username);

        // 존재하지 않는 경우 없는 사용자
        if (userEntity == null)
            throw new UsernameNotFoundException(username);

        // 마지막 인자는 권한을 넣는 곳입니다.
        return new User(username, userEntity.getEncryptedPassword(),
                true, true, true, true,
                new ArrayList<>());
    }
}
