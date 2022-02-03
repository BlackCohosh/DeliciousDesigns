package com.deliciousdesigns.plant.repository;

import com.deliciousdesigns.plant.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface PlantRepository extends JpaRepository <Plant, Long> {
    // all crud database methods
}
