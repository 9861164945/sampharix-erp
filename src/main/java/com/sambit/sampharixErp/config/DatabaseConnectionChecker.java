package com.sambit.sampharixErp.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

@Component
public class DatabaseConnectionChecker implements CommandLineRunner {

    private final DataSource dataSource;

    // Constructor Injection
    public DatabaseConnectionChecker(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void run(String... args) {
        try (Connection connection = dataSource.getConnection()) {

            if (connection.isValid(2)) {
                System.out.println("✅ Database connection SUCCESSFUL");
            } else {
                System.out.println("❌ Database connection FAILED");
            }

        } catch (Exception e) {
            System.out.println("❌ Database connection ERROR: " + e.getMessage());
        }
    }
}