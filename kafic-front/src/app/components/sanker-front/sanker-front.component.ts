import { Component, OnInit } from '@angular/core';
import { NarudzbinaDTO } from '../../models/NarudzbinaDTO/narudzbina-dto';
import { NarudzbinaService } from '../../services/Narudzbina/narudzbina.service';
import { NarudzbinaPiceDTO } from '../../models/NarudzbinaPiceDTO/narudzbina-pice-dto';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sanker-front',
  templateUrl: './sanker-front.component.html',
  styleUrl: './sanker-front.component.css'
})
export class SankerFrontComponent implements OnInit{

  narudzbine: NarudzbinaPiceDTO[];
  sveNarudzbine: NarudzbinaPiceDTO[];

  constructor(
    private narService: NarudzbinaService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.narudzbine = JSON.parse(localStorage.getItem("sanker-front") || "[]");

    this.narService.getAllNarudzbine().subscribe(res => {
      console.log(res);
      
      this.narudzbine = res.filter(r => r.spremno == false);
      this.sveNarudzbine = this.narudzbine;
    });
  }

  spremno(narId: number){
    console.log(narId);
    
    this.narService.spremno(narId).subscribe({
      next: (res: any) => {
        this.toastr.success("Uspesno spremna narudzbina.");
        this.narudzbine = this.narudzbine.filter((n, index) => n.narudzbinaId != narId);
        localStorage.setItem("sanker-front", JSON.stringify(this.narudzbine));
      },
      error: (err: any) => {
        this.toastr.error("Greska. Pokusajte ponovo.");
      }
    })
  }

}
