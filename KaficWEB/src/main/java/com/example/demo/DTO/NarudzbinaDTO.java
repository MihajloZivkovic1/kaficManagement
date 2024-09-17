package com.example.demo.DTO;

import java.util.List;

public class NarudzbinaDTO {

	private int idNarudzbine;

	private double ukupnaCena;

	private int brStola;

	//private boolean spremno;

	private List<PiceNarudzbinaDTO> pica;

//	public boolean isSpremno() {
//		return spremno;
//	}
//
//	public void setSpremno(boolean spremno) {
//		this.spremno = spremno;
//	}

	public int getIdNarudzbine() {
		return idNarudzbine;
	}

	public void setIdNarudzbine(int idNarudzbine) {
		this.idNarudzbine = idNarudzbine;
	}

	public double getUkupnaCena() {
		return ukupnaCena;
	}

	public void setUkupnaCena(double ukupnaCena) {
		this.ukupnaCena = ukupnaCena;
	}

	public int getBrStola() {
		return brStola;
	}

	public void setBrStola(int brStola) {
		this.brStola = brStola;
	}

	public List<PiceNarudzbinaDTO> getPica() {
		return pica;
	}

	public void setPica(List<PiceNarudzbinaDTO> pica) {
		this.pica = pica;
	}

	@Override
	public String toString() {
		return "NarudzbinaDTO [idNarudzbine=" + idNarudzbine + ", ukupnaCena=" + ukupnaCena + ", brStola=" + brStola
				+ ", pica=" + pica + "]";
	}

}
