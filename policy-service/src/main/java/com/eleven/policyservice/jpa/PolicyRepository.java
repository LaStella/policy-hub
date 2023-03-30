package com.eleven.policyservice.jpa;

import org.springframework.data.repository.CrudRepository;

public interface PolicyRepository extends CrudRepository<PolicyEntity, Long> {

    PolicyEntity findByPolicyId(String policyId);
}
