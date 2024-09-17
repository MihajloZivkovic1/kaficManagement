import { Component, OnInit } from '@angular/core';
import { PiceService } from '../../services/Pice/pice.service';
import { Pice } from '../../models/Pice/pice';
import { ToastrService } from 'ngx-toastr';
import { PiceNarudzbina } from '../../models/PiceNarudzbine/pice-narudzbina';
import { KategorijaService } from '../../services/Kategorija/kategorija.service';
import { Kategorija } from '../../models/Kategorija/kategorija';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrl: './drink-menu.component.css'
})
export class DrinkMenuComponent implements OnInit{
  
  pica: Pice[];
  svaPica: Pice[];
  picaNarudzbina: PiceNarudzbina[] = [];
  filtriranaPica: Pice[];
  kategorije: Kategorija[] = [];
  kategorija: string = '';

  constructor(
    private piceService: PiceService, 
    private toastr: ToastrService, 
    private kategorijaService: KategorijaService,
    private route: ActivatedRoute,
  ){
    
  }

  ngOnInit(): void {
    this.piceService.getAllPica().subscribe(res => {
      this.pica = res;
      this.svaPica = res;
    });

    this.kategorijaService.getAllKategorije().subscribe(res => {
      this.kategorije = res;
    });


    this.route.queryParamMap.subscribe(params =>{
      this.pica = this.svaPica;
      this.kategorija = params.get('kategorije') ?? '';
      console.log(this.kategorija)
      this.filtriranaPica = (this.kategorija) ?
      this.pica.filter(p => p.kategorija.kategorijaId === parseInt(this.kategorija)) : 
      this.pica;
      this.pica = this.filtriranaPica;
    })
  }

  dodajUKorpu(pice:Pice, kolicina:any){
    
    if(kolicina.value == ""){
      this.toastr.error("Morate izabrati neku kolicinu");
    }else if(kolicina.value > pice.kolicina){
      this.toastr.error("Nemamo trazenu kolicinu pica.");
    }
    else{
      if(localStorage.getItem("korpa") != null){
        this.picaNarudzbina = JSON.parse(localStorage.getItem("korpa") || "[]");
      }
      //this.picaNarudzbina.
      this.picaNarudzbina.push({piceId: pice.piceId, kolicina: kolicina.value, naziv: pice.naziv, cena: pice.cena});
      localStorage.setItem("korpa", JSON.stringify(this.picaNarudzbina));
      this.toastr.success("Uspesno ste dodali pice u korpu");
    }

    //alert(pice.naziv + " " + kolicina.value); 
    //this.toastr.success("Uspesno ste dodali pice u korpu"); 
  }

}
