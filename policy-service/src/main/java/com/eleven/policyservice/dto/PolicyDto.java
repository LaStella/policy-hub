package com.eleven.policyservice.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PolicyDto {
    private String name;
    private String description;
    private String policyId;
    private Date createdAt;
    private String tag;
    private String logo;
    private String link;
}
