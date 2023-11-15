package com.grupo1.canchalibre.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.grupo1.canchalibre.service.ShiftService;
import com.grupo1.canchalibre.entity.Shift;
import com.grupo1.canchalibre.dto.ShiftDTO;


import java.util.Date;
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
    @GetMapping("/bySoccerFieldAndDateTime/{SoccerFieldId}/{dateTime}")
    public List<Shift> getShiftsBySoccerFieldIdAndDateTime(
            @PathVariable Long soccerField_id,
            @PathVariable Date dateTime
    ) {
        return shiftService.findShiftsBySoccerFieldIdAndDateTime(soccerField_id, dateTime);
    }

    @GetMapping("/bySoccerFieldAndTimeRange")
    public List<Shift> searchShifts(
            @RequestParam long SoccerField_id,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") Date startDate,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") Date endDate) {

        return shiftService.findShiftsBySoccerFieldIdAndDateTimeRange(SoccerField_id, startDate, endDate);
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

    @GetMapping("/SoccerField/{id}")
    public ResponseEntity<List<Shift>> listAllBySoccerField(@PathVariable Long id) {
        return ResponseEntity.ok(shiftService.listAllBySoccerField(id));
    }

    @GetMapping("/SoccerField/{id}/libre")
    public ResponseEntity<List<Shift>> listAvailableBySoccerFields(@PathVariable Long id) {
        return ResponseEntity.ok(shiftService.listAvailableBySoccerFields(id));
    }
}
