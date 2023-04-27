package com.eleven.bookmarkservice.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class BookmarkDto implements Serializable {
    private String bookmarkId;
    private String policyId;
    private String userId;
}