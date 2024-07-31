package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}
