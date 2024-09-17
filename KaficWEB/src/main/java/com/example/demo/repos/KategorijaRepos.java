package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Kategorijepica;


public interface KategorijaRepos extends JpaRepository<Kategorijepica, Integer>{

	Kategorijepica findByNaziv(String naziv);
	Kategorijepica findByKategorijaId(int kategorijaId);
}
