package com.grupo1.canchalibre.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.grupo1.canchalibre.service.ShiftService;
import com.grupo1.canchalibre.entity.Shift;
import com.grupo1.canchalibre.dto.ShiftDTO;


import java.util.List;

@RestController
//@Cross origin completar
@RequestMapping("/shift")
public class ShiftController {
    @Autowired
    private ShiftService shiftService;

    @PostMapping
    public ResponseEntity<Shift> save(@RequestBody ShiftDTO shift) {
        return ResponseEntity.ok(shiftService.save(shift));
    }

    @GetMapping
    public ResponseEntity<List<Shift>>  list() {
        return ResponseEntity.ok(shiftService.list());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Shift> find(@PathVariable Long id) {
        Shift shift = shiftService.find(id);
            return ResponseEntity.ok(shift);
        }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        shiftService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shift> update(@PathVariable(name = "id")Long id, @RequestBody ShiftDTO shift) {
        return ResponseEntity.ok(shiftService.update(id, shift));
    }
}
