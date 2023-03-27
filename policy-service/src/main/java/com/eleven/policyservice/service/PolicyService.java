package com.eleven.policyservice.service;

import com.eleven.policyservice.dto.PolicyDto;

public interface PolicyService {
    PolicyDto createPolicy(PolicyDto policyDto);
}
