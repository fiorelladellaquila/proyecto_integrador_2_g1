package com.grupo1.canchalibre.service;

import com.grupo1.canchalibre.dto.ShiftDTO;
import com.grupo1.canchalibre.entity.Shift;
import com.grupo1.canchalibre.repository.IShiftRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ShiftService {
    private final IShiftRepository iShiftRepository;

    @Autowired
    public ShiftService(IShiftRepository iShiftRepository) {
        this.iShiftRepository = iShiftRepository;
    }

    public List<Shift> list() {
        return iShiftRepository.findAll();
    }

    public Shift save(ShiftDTO shift) {
        Shift s = new Shift(shift.getDate_time(), shift.isReserved(), shift.getSoccer_field_id(), shift.getUser_id());
        return iShiftRepository.save(s);
    }

    public Shift find(Long id) {
        return iShiftRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void delete(Long id) {
        this.find(id);
        iShiftRepository.deleteById(id);
    }

    public List<Shift> findShiftsBySoccerFieldIdAndDateTime(Long soccerField_id, Date dateTime) {
        return iShiftRepository.findBySoccerFieldIdAndDateTime(soccerField_id, dateTime);
    }

    public List<Shift> findShiftsBySoccerFieldIdAndDateTimeRange(long soccerField_id, Date startDate, Date endDate) {
        return iShiftRepository.findBySoccerFieldIdAndDateTimeBetween(soccerField_id, startDate, endDate);
    }

    public Shift update(Long shiftId, ShiftDTO updatedShiftDTO) {
        // Check if the shift with the given ID exists
        Shift existingShift = iShiftRepository.findById(shiftId)
                .orElseThrow(() -> new EntityNotFoundException("Shift with id " + shiftId + " not found"));

        // Update the properties of the existing shift with the values from the DTO
        existingShift.setDate_time(updatedShiftDTO.getDate_time());
        existingShift.setReserved(updatedShiftDTO.isReserved());
        existingShift.setSoccer_field_id(updatedShiftDTO.getSoccer_field_id());
        existingShift.setUser_id(updatedShiftDTO.getUser_id());

        // Save the updated shift to the database
        return iShiftRepository.save(existingShift);
    }

    public List<Shift> listAllBySoccerField(Long soccerField_id) {
        List<Shift> shifts = this.list();
        List<Shift> shiftsBySoccerField = new ArrayList<>();
        for (Shift shift : shifts) {
            if (shift.getSoccer_field_id() == soccerField_id) {
                shiftsBySoccerField.add(shift);
            }
        }
        return shiftsBySoccerField;
    }

    public List<Shift> listAvailableBySoccerFields(Long soccerField_id) {
        List<Shift> shifts = this.list();
        List<Shift> shiftsAvailableBySoccerField = new ArrayList<>();
        for (Shift shift : shifts) {
            if (shift.getSoccer_field_id() == soccerField_id && !shift.isReserved()) {
                shiftsAvailableBySoccerField.add(shift);
            }
        }
        return shiftsAvailableBySoccerField;
    }
}
