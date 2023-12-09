package com.grupo1.canchalibre.controller;

import com.grupo1.canchalibre.dto.SoccerFieldsDTO;
import com.grupo1.canchalibre.entity.SoccerFields;
import com.grupo1.canchalibre.service.SoccerFieldsService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController
//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/soccer-fields")
public class SoccerFieldsController {

    @Autowired
    private SoccerFieldsService soccerFieldsService;

@PostMapping()
public ResponseEntity<?> save(@Valid @RequestBody SoccerFieldsDTO soccerFields) {
    StringBuilder errorMessage = new StringBuilder("The following fields are required: ");

    if (soccerFields.getDescription() == null || soccerFields.getDescription().isBlank()) {
        errorMessage.append("description, ");
    }

    if (soccerFields.getPrice() <= 0.0f) {
        errorMessage.append("price, ");
    }

    if (soccerFields.getSize() == null || soccerFields.getSize().isBlank()) {
        errorMessage.append("size, ");
    }

    // Remove last comma and whitespace if fields were added
    if (errorMessage.toString().endsWith(", ")) {
        errorMessage.setLength(errorMessage.length() - 2);
    }

    if (errorMessage.toString().equals("The following fields are required: ")) {
        SoccerFields savedSoccerField = soccerFieldsService.save(soccerFields);
        return ResponseEntity.ok(savedSoccerField);
    } else {
        return ResponseEntity.badRequest().body(errorMessage.toString());
    }
}

    @GetMapping
    public ResponseEntity<List<SoccerFields>>  list() {
        return ResponseEntity.ok(soccerFieldsService.list());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SoccerFields> find(@PathVariable Long id) {
        SoccerFields soccerFields = soccerFieldsService.find(id);
        return ResponseEntity.ok(soccerFields);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        soccerFieldsService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") Long id, @Valid @RequestBody SoccerFieldsDTO soccerFields) {
        StringBuilder errorMessage = new StringBuilder("The following fields are required: ");

        if (soccerFields.getDescription() == null || soccerFields.getDescription().isBlank()) {
            errorMessage.append("description, ");
        }

        if (soccerFields.getPrice() <= 0.0f) {
            errorMessage.append("price, ");
        }

        if (soccerFields.getSize() == null || soccerFields.getSize().isBlank()) {
            errorMessage.append("size, ");
        }

        // Remove last comma and whitespace if fields were added
        if (errorMessage.toString().endsWith(", ")) {
            errorMessage.setLength(errorMessage.length() - 2);
        }

        if (errorMessage.toString().equals("The following fields are required: ")) {
            SoccerFields updatedSoccerField = soccerFieldsService.update(id, soccerFields);
            return ResponseEntity.ok(updatedSoccerField);
        } else {
            return ResponseEntity.badRequest().body(errorMessage.toString());
        }
    }
}