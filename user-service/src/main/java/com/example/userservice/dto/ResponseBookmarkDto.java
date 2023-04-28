package com.example.userservice.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ResponseBookmarkDto {
    private String bookmarkId;
    private String policyId;
    private String userId;
    private Date createdAt;
}
