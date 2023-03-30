package com.eleven.policyservice.vo;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestPolicy {
    @NotNull(message = "Name cannot be null")
    @Size(min = 2, message = "Name not be less than two characters")
    private String name;

    @NotNull(message = "Description cannot be null")
    @Size(min = 2, message = "Description not be less than two characters")
    private String description;

    private String tag;

    private String logo;

    private String link;
}