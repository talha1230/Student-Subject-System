package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
