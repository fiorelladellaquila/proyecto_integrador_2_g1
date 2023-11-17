package com.grupo1.canchalibre.service;

import com.grupo1.canchalibre.dto.AdminDTO;
import com.grupo1.canchalibre.entity.Admin;
import com.grupo1.canchalibre.repository.IAdminRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class AdminService {

    private IAdminRepository iAdminRepository;

     @Autowired
    public AdminService(IAdminRepository iAdminRepository){
        this.iAdminRepository = iAdminRepository;
    }

    // Get all the admin
    public List<Admin> list(){
        return iAdminRepository.findAll();
    }

    // Find admin by Id
    public Admin find(Long id){
        return iAdminRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // Delete admin by id
    public void delete(Long id) {
        this.find(id);
        iAdminRepository.deleteById(id);
    }

    // Create new admin
    public Admin save(AdminDTO admin){
        Admin a =new Admin(admin.getName(), admin.getLastName(), admin.getEmail(), admin.getPhone());
        return iAdminRepository.save(a);
    }

    // Update admin
    public Admin update(Long admin_id, AdminDTO updatedAdminDTO) {

        Admin existingAdmin = iAdminRepository.findById(admin_id)
                .orElseThrow(() -> new EntityNotFoundException("Administrator with id " + admin_id + " not found"));

        existingAdmin.setName(updatedAdminDTO.getName());
        existingAdmin.setLastName(updatedAdminDTO.getLastName());
        existingAdmin.setEmail(updatedAdminDTO.getEmail());
        existingAdmin.setPhone(updatedAdminDTO.getPhone());

        return iAdminRepository.save(existingAdmin);
    }

}
