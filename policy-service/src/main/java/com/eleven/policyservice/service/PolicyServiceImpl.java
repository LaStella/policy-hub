package com.eleven.policyservice.service;

import com.eleven.policyservice.dto.PolicyDto;
import com.eleven.policyservice.jpa.PolicyEntity;
import com.eleven.policyservice.jpa.PolicyRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PolicyServiceImpl implements PolicyService {
    @Autowired
    PolicyRepository policyRepository;

    @Override
    public PolicyEntity createPolicy(PolicyDto policyDto) {
        policyDto.setPolicyId(UUID.randomUUID().toString());

        PolicyEntity policyEntity = new PolicyEntity();
        BeanUtils.copyProperties(policyDto, policyEntity);

        return policyRepository.save(policyEntity);
    }

    @Override
    public Iterable<PolicyEntity> getPolicyByAll() {
        return policyRepository.findAll();
    }

    @Override
    public PolicyEntity getPolicyByPolicyId(String policyId) {
        return policyRepository.findByPolicyId(policyId);
    }
}
