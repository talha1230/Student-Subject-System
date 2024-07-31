package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findAll();
    Optional<Student> findById(Long id);
    Student save(Student student);
    void deleteById(Long id);
}
