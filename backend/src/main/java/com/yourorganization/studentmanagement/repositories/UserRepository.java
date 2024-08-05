package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
