package com.eleven.policyservice.service;

import com.eleven.policyservice.dto.PolicyDto;
import com.eleven.policyservice.jpa.PolicyEntity;
import com.eleven.policyservice.jpa.PolicyRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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

        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        PolicyEntity policyEntity = mapper.map(policyDto, PolicyEntity.class);

        return policyRepository.save(policyEntity);
    }

    @Override
    public Iterable<PolicyEntity> getPolicyByAll() {
        return policyRepository.findAll();
    }
}
