package com.example.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class UserController {
    private Environment environment;

    @Autowired
    public UserController(Environment environment) {
        this.environment = environment;
    }

    @GetMapping("/status_check")
    public String status() {
        return String.format("It's Working in User Service on PORT %s",
                environment.getProperty("local.server.port"));
    }
}
