package com.eleven.bookmarkservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseDto {
    private String bookmarkId;
    private String policyId;
    private String userId;
    private Date createdAt;
}
