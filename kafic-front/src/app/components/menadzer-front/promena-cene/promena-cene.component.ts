import { Component, OnInit } from '@angular/core';
import { Pice } from '../../../models/Pice/pice';
import { PiceService } from '../../../services/Pice/pice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-promena-cene',
  templateUrl: './promena-cene.component.html',
  styleUrl: './promena-cene.component.css'
})
export class PromenaCeneComponent implements OnInit{
  
  private cena: number;
  pica: Pice[];

  constructor(private piceService: PiceService,
              private toastr: ToastrService
  ){}
  
  ngOnInit(): void {
    
    this.piceService.getAllPica().subscribe({
      next: (res: Pice[]) => {
        this.pica=res;
      }
    })

  }

  promena(naziv:string, cena:string){
    //alert(naziv+cena);
    this.piceService.izmeniCenu(naziv, Number(cena)).subscribe({
      next: (res: any)=>{
        this.toastr.success("Uspesno izmenjena cena.");
      },
      error: (err:any) => {
        this.toastr.error("Greska. Pokusajte ponovo.");
      }
    })
  }
  

}
