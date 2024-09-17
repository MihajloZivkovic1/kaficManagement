package com.example.demo.DTO;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import model.Pice;
import model.Stolovi;

public class NarudzbinaPicaDTO {

	private LocalDateTime datumNarudzbine;

	private int narudzbinaId;

	private int brStola;

	private boolean spremno;

	private List<PiceFrontDTO> pica = new ArrayList<PiceFrontDTO>();

	public boolean isSpremno() {
		return spremno;
	}

	public void setSpremno(boolean spremno) {
		this.spremno = spremno;
	}

	public LocalDateTime getDatumNarudzbine() {
		return datumNarudzbine;
	}

	public void setDatumNarudzbine(LocalDateTime localDateTime) {
		this.datumNarudzbine = localDateTime;
	}

	public int getNarudzbinaId() {
		return narudzbinaId;
	}

	public void setNarudzbinaId(int narudzbinaId) {
		this.narudzbinaId = narudzbinaId;
	}

	public int getBrStola() {
		return brStola;
	}

	public void setBrStola(int brStola) {
		this.brStola = brStola;
	}

	public List<PiceFrontDTO> getPica() {
		return pica;
	}

	public void setPica(List<PiceFrontDTO> pica) {
		this.pica = pica;
	}

}
