package com.eleven.policyservice.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PolicyDto {
    private String policyId;
    private String name;
    private String description;
    private String tag;
    private String logo;
    private String link;
    private Date createdAt;
}
