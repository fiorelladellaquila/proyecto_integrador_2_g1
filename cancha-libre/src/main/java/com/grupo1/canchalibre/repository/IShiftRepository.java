package com.grupo1.canchalibre.repository;
import com.grupo1.canchalibre.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface IShiftRepository extends JpaRepository<Shift, Long>{
    List<Shift> findByCanchaIdAndDateTime(Long canchaId, Date dateTime);

    @Query("SELECT s FROM Shift s WHERE s.canchaId = :canchaId AND s.dateTime BETWEEN :startDate AND :endDate")
    List<Shift> findByCanchaIdAndDateTimeBetween(
            @Param("canchaId") long canchaId,
            @Param("startDate") Date startDate,
            @Param("endDate") Date endDate);

}
