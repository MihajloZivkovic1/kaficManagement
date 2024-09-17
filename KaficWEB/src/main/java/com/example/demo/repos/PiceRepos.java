package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import model.Pice;

public interface PiceRepos extends JpaRepository<Pice, Integer>{
	
	@Query("select p from Pice p where p.kategorijepica.naziv =:naziv")
	List<Pice> getPicaZaKategoriju(@Param("naziv")String naziv);
	
	@Modifying
	@Transactional
	@Query("UPDATE Pice p SET p.cena =:cena WHERE p.naziv = :naziv")
    int updateCena(@Param("naziv") String naziv, @Param("cena") Integer cena);
}
