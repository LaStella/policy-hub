package com.eleven.policyservice.controller;

import com.eleven.policyservice.dto.PolicyDto;
import com.eleven.policyservice.jpa.PolicyEntity;
import com.eleven.policyservice.service.PolicyService;
import com.eleven.policyservice.vo.RequestPolicy;
import com.eleven.policyservice.vo.ResponsePolicy;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/policy-service")
public class PolicyController {
    private Environment environment; // application.yml에서 특정한 값을 가져올때 사용합니다.
    private PolicyService policyService;

    public PolicyController(Environment environment, PolicyService policyService) {
        this.environment = environment;
        this.policyService = policyService;
    }

    @Autowired
    public PolicyController(PolicyService policyService) {
        this.policyService = policyService;
    }

    @GetMapping("/status_check")
    public String checkStatus() {
        return String.format("It's Working in Policy Service on PORT %s",
                environment.getProperty("local.server.port"));
    }


    @PostMapping("/policies")
    public ResponseEntity<ResponsePolicy> createUser(@RequestBody RequestPolicy requestPolicy) {
        PolicyDto policyDto = new PolicyDto();
        BeanUtils.copyProperties(requestPolicy, policyDto);
        policyService.createPolicy(policyDto);

        ResponsePolicy responsePolicy = new ResponsePolicy();
        BeanUtils.copyProperties(policyDto, responsePolicy);

        // 정상적으로 생성되었음을 알리는 201코드와 정책 응답 객체를 응답엔티티에 담아 전달합니다.
        return ResponseEntity.status(HttpStatus.CREATED).body(responsePolicy);
    }

    @GetMapping("/policies")
    public ResponseEntity<List<ResponsePolicy>> getPolicies() {
        Iterable<PolicyEntity> policyList = policyService.getPolicyByAll();

        List<ResponsePolicy> result = new ArrayList<>();
        policyList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponsePolicy.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/policies/{policyId}")
    public ResponseEntity<ResponsePolicy> getPolicy(@PathVariable("policyId") String policyId) {
        PolicyEntity policyEntity = policyService.getPolicyByPolicyId(policyId);

        ResponsePolicy returnValue = new ResponsePolicy();
        BeanUtils.copyProperties(policyEntity, returnValue);

        return ResponseEntity.status(HttpStatus.OK).body(returnValue);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ResponsePolicy>> searchPolicies(@RequestParam(value = "q") String keyword) {
        Iterable<PolicyEntity> policyList = policyService.getPolicyByKeyword(keyword);

        List<ResponsePolicy> result = new ArrayList<>();
        policyList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponsePolicy.class));
        });

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
