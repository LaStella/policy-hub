package com.eleven.policyservice.service;

import com.eleven.policyservice.dto.PolicyDto;
import com.eleven.policyservice.jpa.PolicyEntity;

public interface PolicyService {
    PolicyEntity createPolicy(PolicyDto policyDto);
    Iterable<PolicyEntity> getPolicyByAll();
    PolicyEntity getPolicyByPolicyId(String policyId);
}
