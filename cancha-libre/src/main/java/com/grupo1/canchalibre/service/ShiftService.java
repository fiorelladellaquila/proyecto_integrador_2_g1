package com.grupo1.canchalibre.service;
import com.grupo1.canchalibre.dto.ShiftDTO;
import com.grupo1.canchalibre.entity.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.grupo1.canchalibre.repository.IShiftRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ShiftService {
    private IShiftRepository iShiftRepository;

    @Autowired
    public ShiftService(IShiftRepository iShiftRepository){
        this.iShiftRepository = iShiftRepository;
    }

    public List<Shift> list(){
        return iShiftRepository.findAll();
    }
    
    public Shift save(ShiftDTO shift){
        Shift s =new Shift(shift.getDateTime(),shift.isReserved(),shift.getCanchaId(),shift.getUserId());
        return iShiftRepository.save(s);
    }

    public Shift find(Long id){
        return iShiftRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void delete(Long id){
        this.find(id);
        iShiftRepository.deleteById(id);
    }

    public List<Shift> findShiftsByCanchaIdAndDateTime(Long canchaId, Date dateTime) {
        return iShiftRepository.findByCanchaIdAndDateTime(canchaId, dateTime);
    }

    public Shift update(Long shiftId, ShiftDTO updatedShiftDTO) {
        // Check if the shift with the given ID exists
        Shift existingShift = iShiftRepository.findById(shiftId)
                .orElseThrow(() -> new EntityNotFoundException("Shift with id " + shiftId + " not found"));

        // Update the properties of the existing shift with the values from the DTO
        existingShift.setDateTime(updatedShiftDTO.getDateTime());
        existingShift.setReserved(updatedShiftDTO.isReserved());
        existingShift.setCanchaId(updatedShiftDTO.getCanchaId());
        existingShift.setUserId(updatedShiftDTO.getUserId());

        // Save the updated shift to the database
        return iShiftRepository.save(existingShift);
    }

    public List<Shift> listAllByCancha(Long canchaId){
        List<Shift> shifts = this.list();
        List<Shift> shiftsByCancha = new ArrayList<>();
        for(Shift shift : shifts){
            if(shift.getCanchaId()==canchaId){
                shiftsByCancha.add(shift);
            }
        }
        return shiftsByCancha;
    }

    public List<Shift> listAvailableByCancha(Long canchaId){
        List<Shift> shifts = this.list();
        List<Shift> shiftsAvailableByCancha = new ArrayList<>();
        for(Shift shift : shifts){
            if(shift.getCanchaId()==canchaId && !shift.isReserved()){
                shiftsAvailableByCancha.add(shift);
            }
        }
        return shiftsAvailableByCancha;
    }
}
