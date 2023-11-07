package com.grupo1.canchalibre.repository;
import com.grupo1.canchalibre.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IShiftRepository extends JpaRepository<Shift, Long>{
    
}
