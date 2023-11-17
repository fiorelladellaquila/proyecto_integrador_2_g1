package com.grupo1.canchalibre.controller;

import com.grupo1.canchalibre.dto.AdminDTO;
import com.grupo1.canchalibre.entity.Admin;
import com.grupo1.canchalibre.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/administrators")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Create admin
    @PostMapping()
    public ResponseEntity<Admin>save(@RequestBody AdminDTO admin) {
        return ResponseEntity.ok(adminService.save(admin));
    }

    // Get all admin
    @GetMapping
    public ResponseEntity<List<Admin>>  list() {
        return ResponseEntity.ok(adminService.list());
    }

    // Get admin by id
    @GetMapping("/{id}")
    public ResponseEntity<Admin> find(@PathVariable Long id) {
        Admin admin = adminService.find(id);
        return ResponseEntity.ok(admin);
    }

    // Delete admin by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        adminService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    // Update by id
    @PutMapping("/{id}")
    public ResponseEntity<Admin> update(@PathVariable(name = "id")Long id, @RequestBody AdminDTO admin) {
        return ResponseEntity.ok(adminService.update(id, admin));
    }








}
