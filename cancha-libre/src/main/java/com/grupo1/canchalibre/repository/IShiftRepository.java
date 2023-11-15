package com.grupo1.canchalibre.repository;
import com.grupo1.canchalibre.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface IShiftRepository extends JpaRepository<Shift, Long>{
    @Query("SELECT s FROM Shift s WHERE s.soccer_field_id = :soccerField_id AND s.dateTime = :dateTime")
    List<Shift> findBySoccerFieldIdAndDateTime(
            @Param("soccerField_id") long soccerField_id,
            @Param("dateTime") Date dateTime);
    @Query("SELECT s FROM Shift s WHERE s.soccer_field_id = :soccerField_id AND s.dateTime BETWEEN :startDate AND :endDate")
    List<Shift> findBySoccerFieldIdAndDateTimeBetween(
            @Param("soccerField_id") long soccerField_id,
            @Param("startDate") Date startDate,
            @Param("endDate") Date endDate);

}
