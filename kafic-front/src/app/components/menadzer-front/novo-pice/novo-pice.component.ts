import { Component, OnInit } from '@angular/core';
import { Pice } from '../../../models/Pice/pice';
import { PiceNarudzbina } from '../../../models/PiceNarudzbine/pice-narudzbina';
import { Kategorija } from '../../../models/Kategorija/kategorija';
import { PiceService } from '../../../services/Pice/pice.service';
import { ToastrService } from 'ngx-toastr';
import { KategorijaService } from '../../../services/Kategorija/kategorija.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-pice',
  templateUrl: './novo-pice.component.html',
  styleUrl: './novo-pice.component.css'
})

export class NovoPiceComponent implements OnInit{

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

  dodajKolicinu(id:number, kolicina:any){
    //alert(id+kolicina)
   // console.log(kolicina);
    if(kolicina == ""){
      this.toastr.error("Morate izabrati neku kolicinu")
    }else{
      this.piceService.dodajUMagacin(id, kolicina).subscribe({
        next: (res:any) => {
          this.toastr.success("Uspesno ste promenili kolicinu.");
        },
        error: (err:any) => {
          this.toastr.error("Greska. Pokusajte ponovo.");
        }
      })
    }

  }
}
