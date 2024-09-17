package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import model.Zaposleni;

public interface ZaposleniRepos extends JpaRepository<Zaposleni, Integer>{

	Zaposleni findByUloga(String uloga);
	
	@Query("select z from Zaposleni z where z.username =:us and z.password =:ps")
	public Zaposleni getZaposleniLogin(@Param("us") String us, @Param("ps") String ps);
}
