package com.sambit.sampharixErp.modules.user.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Basic Info
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // Role Enum
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    // Self Relationship
    @ManyToOne
    @JoinColumn(name = "parent_id")

    @JsonIgnore
    private User parent;

    // Additional Info
    private String phone;

    private String address;

    @Column(name = "is_active")
    private Boolean active;

    // Audit Fields
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}