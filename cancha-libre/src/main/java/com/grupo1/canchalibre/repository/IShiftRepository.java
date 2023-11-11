package com.grupo1.canchalibre.repository;
import com.grupo1.canchalibre.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface IShiftRepository extends JpaRepository<Shift, Long>{
    List<Shift> findByCanchaIdAndDateTime(Long canchaId, Date dateTime);
}
