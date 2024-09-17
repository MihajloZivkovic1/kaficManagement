package com.example.demo.DTO;

public class PiceDTO {

	private int piceId;

	private double cena;

	private String naziv;

	private String opis;

	private String slika;

	private int kolicina;

	private KategorijaDTO kategorija;

	public int getKolicina() {
		return kolicina;
	}

	public void setKolicina(int kolicina) {
		this.kolicina = kolicina;
	}

	public KategorijaDTO getKategorija() {
		return kategorija;
	}

	public void setKategorija(KategorijaDTO kategorija) {
		this.kategorija = kategorija;
	}

	public int getPiceId() {
		return piceId;
	}

	public void setPiceId(int piceId) {
		this.piceId = piceId;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSlika() {
		return slika;
	}

	public void setSlika(String slika) {
		this.slika = slika;
	}

	public double getCena() {
		return cena;
	}

	public void setCena(double cena) {
		this.cena = cena;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

}
