import { Component, OnInit } from '@angular/core';
import { PiceNarudzbina } from '../../models/PiceNarudzbine/pice-narudzbina';
import { Sto } from '../../models/Sto/sto';
import { StoService } from '../../services/Sto/sto.service';
import { ToastrService } from 'ngx-toastr';
import { NarudzbinaDTO } from '../../models/NarudzbinaDTO/narudzbina-dto';
import { PiceNarudzbineDTO } from '../../models/PiceNarudzbineDTO/pice-narudzbine-dto';
import { NarudzbinaService } from '../../services/Narudzbina/narudzbina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrl: './korpa.component.css'
})
export class KorpaComponent implements OnInit{

  pica: PiceNarudzbina[] = [];
  ukupnaCena: number = 0.0;
  stolovi: Sto[];
  selectedOption: number;
  narudzbinaDTO: NarudzbinaDTO = new NarudzbinaDTO();
  piceNarudbinaDTO: PiceNarudzbineDTO [];

  constructor(private stoService: StoService, private toastr: ToastrService,
    private narudzbinService: NarudzbinaService, private router: Router){}

  ngOnInit(): void {
    
    this.pica = JSON.parse(localStorage.getItem("korpa") || "[]");
    this.ukupnaCena = this.pica.reduce((prev, curr) => prev + (curr.cena * curr.kolicina), 0);
    this.stoService.getAllSLobodniStolovi().subscribe(res => {
      this.stolovi = res;
    });
    
  }

  izbaci(piceIndex: number){
    this.pica = this.pica.filter((p, index) => index != piceIndex);
    this.ukupnaCena = this.pica.reduce((prev, curr) => prev + (curr.cena * curr.kolicina), 0);
    localStorage.setItem("korpa", JSON.stringify(this.pica));
  }

  poruci(){
    console.log(this.pica);
    console.log(this.selectedOption);
    if(this.selectedOption == undefined){
      this.toastr.error("Morate izabrati sto za narudzbinu.");
    }else{
      this.piceNarudbinaDTO =  this.pica.map(p => (
        {
          piceId: p.piceId,
          kolicina: p.kolicina,
        }
      ));
      console.log(this.piceNarudbinaDTO);
      this.narudzbinaDTO.brStola = this.selectedOption;
      this.narudzbinaDTO.ukupnaCena = this.ukupnaCena;
      this.narudzbinaDTO.pica = this.piceNarudbinaDTO;
      this.narudzbinService.createNarudzbina(this.narudzbinaDTO).subscribe({
        next: (res:any) => {
          console.log(res);
          localStorage.removeItem("korpa");
          this.toastr.success("Uspesno ste kreirali narudzbinu!");
          setTimeout(() => {
            this.router.navigate(["/home"]);
          }, 1000);
        },
        error: (err:any) => {
          this.toastr.error("Doslo je do greske.");
        }
      })
    }
  }

}
