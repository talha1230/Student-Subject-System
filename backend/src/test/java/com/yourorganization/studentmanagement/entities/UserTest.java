package com.yourorganization.studentmanagement.entities;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    public void testUserEntity() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");
        user.setRole("ROLE_USER");

        assertEquals("testuser", user.getUsername());
        assertEquals("password", user.getPassword());
        assertEquals("ROLE_USER", user.getRole());
    }
}