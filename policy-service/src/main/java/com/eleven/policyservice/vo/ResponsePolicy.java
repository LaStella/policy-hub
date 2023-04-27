package com.eleven.policyservice.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ResponsePolicy {
    private String policyId;
    private String name;
    private String description;
    private String tag;
    private String logo;
    private String link;
    private Date createdAt;
}
