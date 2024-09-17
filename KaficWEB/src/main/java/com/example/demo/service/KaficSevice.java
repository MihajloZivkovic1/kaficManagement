package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.DTO.KategorijaDTO;
import com.example.demo.DTO.NarudzbinaDTO;
import com.example.demo.DTO.NarudzbinaPicaDTO;
import com.example.demo.DTO.PiceDTO;
import com.example.demo.DTO.PiceFrontDTO;
import com.example.demo.DTO.PiceNarudzbinaDTO;
import com.example.demo.DTO.StoDTO;
import com.example.demo.DTO.ZaposleniDTO;
import com.example.demo.repos.DetaljiPorudzbineRepos;
import com.example.demo.repos.KategorijaRepos;
import com.example.demo.repos.MagacinRepos;
import com.example.demo.repos.NarudzbinaRepos;
import com.example.demo.repos.PiceRepos;
import com.example.demo.repos.StoloviRepos;
import com.example.demo.repos.ZaposleniRepos;

import model.Detaljiporudbine;
import model.Kategorijepica;
import model.Narudzbine;
import model.Pice;
import model.Stolovi;
import model.Zaposleni;

@Service
public class KaficSevice {

	@Autowired
	public PiceRepos pr;
	
	@Autowired
	public KategorijaRepos kr;
	
	@Autowired
	public StoloviRepos sr;
	
	@Autowired
	public NarudzbinaRepos nr;
	
	@Autowired
	public ZaposleniRepos zr;
	
	@Autowired
	public DetaljiPorudzbineRepos dpr;
	
	@Autowired
	public MagacinRepos mr;
	
	/*
		
	OVAJ DEO JE ZA KATEGORIJE
		
	*/
	
	public List<KategorijaDTO> getKategorije(){
		List<Kategorijepica> kategorija = kr.findAll();
		List<KategorijaDTO> povratna = new LinkedList<KategorijaDTO>();
		for (Kategorijepica k : kategorija) {
			KategorijaDTO dto = new KategorijaDTO();
			BeanUtils.copyProperties(k, dto);
			povratna.add(dto);
		}
		return povratna;
	}
	
	public Kategorijepica getKategorija(String kategorija) {
		return kr.findByNaziv(kategorija);
	}
	
	public boolean getKategPoId(int idk) {
		Kategorijepica k = kr.findByKategorijaId(idk);
		if(k == null) {
			return false;
		}else {
			return true;
		}
	}
	
	/*
	
	OVAJ DEO JE ZA PICA
	
	*/
	
	public List<PiceDTO> getSvaPica() {
		List<Pice> pica = pr.findAll();
		List<PiceDTO> povratna = new LinkedList<PiceDTO>();
		for (Pice p : pica) {
			PiceDTO dto = new PiceDTO();
			KategorijaDTO k = new KategorijaDTO();
			BeanUtils.copyProperties(p.getKategorijepica(), k);
			BeanUtils.copyProperties(p, dto);
			dto.setKolicina(p.getMagacins().get(0).getKolicina());
			dto.setKategorija(k);
			povratna.add(dto);
		}
		return povratna;
	}
	
	public List<PiceDTO> getPicaPoKategoriji(String kategorija){
		List<Pice> pica = pr.getPicaZaKategoriju(kategorija);
		List<PiceDTO> povratna = new LinkedList<PiceDTO>();
		for (Pice p : pica) {
			PiceDTO dto = new PiceDTO();
			BeanUtils.copyProperties(p, dto);
			povratna.add(dto);
		}
		return povratna;
	}
	
	public int savePice(PiceDTO p, int idk) {
		try {
			Pice novo = new Pice();
			novo.setNaziv(p.getNaziv());
			novo.setCena(p.getCena());
			novo.setKategorijepica(kr.findByKategorijaId(idk));
			Pice sacuvano = pr.save(novo);
			return sacuvano.getPiceId();
		}catch (Exception e) {
			return -1;
		}
	}
	
	public Pice savePiceMagacin(int id, int kolicina) {
		try {
			Pice pice = pr.findById(id).get();
			int stara = pice.getMagacins().get(0).getKolicina();
			pice.getMagacins().get(0).setKolicina(stara + kolicina);
			pr.save(pice);
			return pice;
		}catch (Exception e) {
			return null;
		}
	}
	
	
	@Transactional
	public void izmeniCenuPica(String naziv, int novaCena) {
        int updatedRows = pr.updateCena(naziv, novaCena);
        if (updatedRows > 0) {
            System.out.println("Cena pića je uspešno izmenjena.");
        } else {
            System.out.println("Piće" + naziv + "nije pronađeno.");
        }
    }
	
	public List<PiceFrontDTO> getPicaFrontDTO() {
		List<Pice> pica = pr.findAll();
		List<PiceFrontDTO> lista = new ArrayList<PiceFrontDTO>();
		for (Pice p : pica) {
			PiceFrontDTO pf = new PiceFrontDTO();
			pf.setNaziv(p.getNaziv());
			pf.setKolicina(mr.getKolicinuZaPice(p.getPiceId()));
			lista.add(pf);
		}
		return lista;
	}
	
	/*
	
	OVAJ DEO JE ZA NARUDZBINE
	
	*/
	
	@Transactional
	public void setSpremnoToTrue(Integer id) {
        nr.setSpremnoToTrue(id);
    }
	
//	public List<NarudzbinaPicaDTO> getNeSpremneNarudzbine(){
//		List<Narudzbine> narudzbine = nr.findAll();
//		List<NarudzbinaPicaDTO> povratna = new ArrayList<NarudzbinaPicaDTO>();
//		for (Narudzbine n : narudzbine) {
//			NarudzbinaPicaDTO dto = new NarudzbinaPicaDTO();
//			dto.setNarudzbinaId(n.getNarudzbinaId());
//			dto.setBrStola(n.getStolovi().getBrojStola());
//			dto.setDatumNarudzbine(n.getDatumNarudzbine());
//			dto.setSpremno(false);
//			for(Detaljiporudbine dp : n.getDetaljiporudbines()) {
//				PiceFrontDTO pf = new PiceFrontDTO();
//				pf.setNaziv(dp.getPice().getNaziv());
//				pf.setKolicina(dp.getKolicina());
//				dto.getPica().add(pf);
//			}
//			povratna.add(dto);
//		}
//		return povratna;
//	}
	
	public List<NarudzbinaPicaDTO> getSveNarudzbine(){
		List<Narudzbine> narudzbine = nr.findAll();
		List<NarudzbinaPicaDTO> povratna = new ArrayList<NarudzbinaPicaDTO>();
		for (Narudzbine n : narudzbine) {
			NarudzbinaPicaDTO dto = new NarudzbinaPicaDTO();
			dto.setNarudzbinaId(n.getNarudzbinaId());
			dto.setBrStola(n.getStolovi().getBrojStola());
			dto.setDatumNarudzbine(n.getDatumNarudzbine());
			dto.setSpremno(n.isSpremno());
			for(Detaljiporudbine dp : n.getDetaljiporudbines()) {
				PiceFrontDTO pf = new PiceFrontDTO();
				pf.setNaziv(dp.getPice().getNaziv());
				pf.setKolicina(dp.getKolicina());
				dto.getPica().add(pf);
			}
			povratna.add(dto);
		}
		return povratna;
	}
	
	
	public NarudzbinaDTO saveNarudzbina(NarudzbinaDTO narudzbinaDTO) {
		try {
			Narudzbine nova = new Narudzbine();
			nova.setDatumNarudzbine(LocalDateTime.now());
			nova.setStolovi(sr.findByBrojStola(narudzbinaDTO.getBrStola()));
			nova.setZaposleni(zr.findByUloga("Sanker"));
			System.out.println(nova);
			//nova.setPices(pica);
			Narudzbine sacuvana = nr.save(nova);
			for(PiceNarudzbinaDTO pice : narudzbinaDTO.getPica()) {
				Detaljiporudbine dp = new Detaljiporudbine();
				Pice novoPice = pr.findById(pice.getPiceId()).get();
				int staraKolicina = novoPice.getMagacins().get(0).getKolicina();
				novoPice.getMagacins().get(0).setKolicina(staraKolicina - pice.getKolicina());
				dp.setPice(novoPice);
				dp.setKolicina(pice.getKolicina());
				dp.setNarudzbine(sacuvana);
				dpr.save(dp);
//				nova.getDetaljiporudbines().add(dp);
			}
			return narudzbinaDTO;
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	

	/*
	
	OVAJ DEO JE ZA ZAPOSLENE
	
	*/
	
	
	public int dodajZaposlenog(ZaposleniDTO novi) {
		try {
			Zaposleni noviZ = new Zaposleni();
			noviZ.setIme(novi.getIme());
			noviZ.setPrezime(novi.getPrezime());
			noviZ.setUloga(novi.getUloga());
			Zaposleni save = zr.save(noviZ);
			return save.getZaposleniId();
		}catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	public Zaposleni getZaposleniLogin(String us, String ps) {
		if(us != null && ps != null) {
			return zr.getZaposleniLogin(us, ps);
		}
		return null;
	}
	
	
	/*
	
	OVAJ DEO JE ZA STOLOVE
	
	*/
	
	
	
	public int saveSto(int brs) {
		try {
			Stolovi novi = new Stolovi();
			novi.setBrojStola(brs);
			novi.setStatus("slobodan");
			Stolovi save = sr.save(novi);
			return novi.getStoId();
		}catch (Exception e) {
			return -1;
		}
	}
	

	public List<StoDTO> getSlobodniStolovi(){
		List<Stolovi> lista = sr.getSlobodniStolovi();
		List<StoDTO> povratna = new LinkedList<StoDTO>();
		for (Stolovi s : lista) {
			StoDTO novi = new StoDTO();
			BeanUtils.copyProperties(s, novi);
			povratna.add(novi);
		}
		return povratna;
	}
	
	
	public Stolovi getStoPoBroju(int brs) {
		return sr.findByBrojStola(brs);
	}
}
