package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface GradeRepository extends JpaRepository<Grade, Long> {
}
