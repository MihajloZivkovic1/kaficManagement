package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import model.Narudzbine;

public interface NarudzbinaRepos extends JpaRepository<Narudzbine, Integer>{

	@Query("select n from Narudzbine n where n.stolovi.brojStola =:brs")
	List<Narudzbine> getNarudzbineZaNekiSto(@Param("brs") Integer brs);
	
	List<Narudzbine> findBySpremno(boolean spremno);
	
	@Transactional
	@Modifying
	@Query("UPDATE Narudzbine n SET n.spremno = true WHERE n.id =:id")
	void setSpremnoToTrue(@Param("id") Integer id);
}
