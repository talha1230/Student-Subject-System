package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
