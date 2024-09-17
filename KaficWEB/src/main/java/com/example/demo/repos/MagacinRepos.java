package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import model.Magacin;

public interface MagacinRepos extends JpaRepository<Magacin, Integer>{

	@Query("select m.kolicina from Magacin m where m.pice.piceId =:id")
	public int getKolicinuZaPice(@Param("id") Integer id);
	
}
