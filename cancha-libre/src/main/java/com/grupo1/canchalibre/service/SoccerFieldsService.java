package com.grupo1.canchalibre.service;

import com.grupo1.canchalibre.dto.SoccerFieldsDTO;
import com.grupo1.canchalibre.entity.SoccerFields;
import com.grupo1.canchalibre.repository.ISoccerFieldsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class SoccerFieldsService {

    private ISoccerFieldsRepository iSoccerFieldsRepository;

    @Autowired
    public SoccerFieldsService(ISoccerFieldsRepository iSoccerFieldsRepository){
        this.iSoccerFieldsRepository = iSoccerFieldsRepository;
    }

    public List<SoccerFields> list(){
        return iSoccerFieldsRepository.findAll();
    }

    public SoccerFields save(SoccerFieldsDTO soccerFields){
        SoccerFields c =new SoccerFields(soccerFields.getId(), soccerFields.getDescription(), soccerFields.getPrice(),
                soccerFields.getSize(), soccerFields.getAdmin_id());
        return iSoccerFieldsRepository.save(c);
    }

    public SoccerFields find(Long id){
        return iSoccerFieldsRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void delete(Long id){
        this.find(id);
        iSoccerFieldsRepository.deleteById(id);
    }

    public SoccerFields update(Long SoccerFields_id, SoccerFieldsDTO updatedSoccerFieldsDTO) {

        SoccerFields existingSoccerFields = iSoccerFieldsRepository.findById(SoccerFields_id)
                .orElseThrow(() -> new EntityNotFoundException("SoccerFields with id " + SoccerFields_id + " not found"));

        existingSoccerFields.setDescription(updatedSoccerFieldsDTO.getDescription());
        existingSoccerFields.setPrice(updatedSoccerFieldsDTO.getPrice());
        existingSoccerFields.setSize(updatedSoccerFieldsDTO.getSize());

        return iSoccerFieldsRepository.save(existingSoccerFields);
    }


}
