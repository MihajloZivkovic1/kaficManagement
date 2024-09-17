package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import model.Stolovi;
import java.util.List;


public interface StoloviRepos extends JpaRepository<Stolovi, Integer>{

	Stolovi findByStoId(int stoId);
	Stolovi findByBrojStola(int brojStola);
	
	@Query("select s from Stolovi s where s.status = 'slobodan'")
	List<Stolovi> getSlobodniStolovi();
}
