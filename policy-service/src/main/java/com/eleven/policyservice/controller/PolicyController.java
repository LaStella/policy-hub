package com.eleven.policyservice.controller;

import com.eleven.policyservice.dto.PolicyDto;
import com.eleven.policyservice.service.PolicyService;
import com.eleven.policyservice.vo.RequestPolicy;
import com.eleven.policyservice.vo.ResponsePolicy;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class PolicyController {
    private PolicyService policyService;

    @Autowired
    public PolicyController(PolicyService policyService) {
        this.policyService = policyService;
    }

    @PostMapping("/policies")
    public ResponseEntity<ResponsePolicy> createUser(@RequestBody RequestPolicy policy) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        PolicyDto policyDto = mapper.map(policy, PolicyDto.class);
        policyService.createPolicy(policyDto);

        ResponsePolicy responsePolicy = mapper.map(policyDto, ResponsePolicy.class);

        // 정상적으로 생성되었음을 알리는 201코드와 정책 응답 객체를 응답엔티티에 담아 전달합니다.
        return ResponseEntity.status(HttpStatus.CREATED).body(responsePolicy);
    }
}
