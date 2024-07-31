package com.yourorganization.studentmanagement.repositories;

import com.yourorganization.studentmanagement.entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
