package com.eleven.policyservice.jpa;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "policies")
public class PolicyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    private String name;
    @Column(nullable = false, unique = true)
    private String policyId;

}
