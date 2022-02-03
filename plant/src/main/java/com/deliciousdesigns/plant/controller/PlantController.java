package com.deliciousdesigns.plant.controller;

import com.deliciousdesigns.plant.exception.ResourceNotFoundException;
import com.deliciousdesigns.plant.model.Plant;
import com.deliciousdesigns.plant.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/plants")
public class PlantController {

    @Autowired
    private PlantRepository plantRepository;

    @GetMapping
    public List<Plant>  getAllPlants(){
        return plantRepository.findAll();
    }

    //build REST API
    @PostMapping
    public Plant createPlant(@RequestBody Plant plant) {
        return plantRepository.save(plant);
    }

    // build get plant by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Plant> getEmployeeById(@PathVariable  long id){
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Plant does not exist with id:" + id));
        return ResponseEntity.ok(plant);
    }

    // build update plant REST API
    @PutMapping("{id}")
    public ResponseEntity<Plant> updatePlant(@PathVariable long id,@RequestBody Plant plantDetails) {
        Plant updatePlant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Plant does not exist with id: " + id));

        updatePlant.setSciName(plantDetails.getSciName());
        updatePlant.setCommonName(plantDetails.getCommonName());
        updatePlant.setPlantHeight(plantDetails.getPlantHeight());
        updatePlant.setPlantSpacing(plantDetails.getPlantSpacing());
        updatePlant.setAnnual(plantDetails.getAnnual());
        updatePlant.setPlantGermTime(plantDetails.getPlantGermTime());
        updatePlant.setPlantSeedDepth(plantDetails.getPlantSeedDepth());
        updatePlant.setPlantSoilTemp(plantDetails.getPlantSoilTemp());

        plantRepository.save(updatePlant);

        return ResponseEntity.ok(updatePlant);
    }

    // build delete plant REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deletePlant(@PathVariable long id){

        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Plant does not exist with id: " + id));

        plantRepository.delete(plant);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
