import { Component, OnInit } from '@angular/core';
import { Pice } from '../../../models/Pice/pice';
import { PiceService } from '../../../services/Pice/pice.service';
import { PiceFrontDto } from '../../../models/PiceFrontDTO/pice-front-dto';

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrl: './lager.component.css'
})
export class LagerComponent implements OnInit{

  pica: PiceFrontDto[];

  constructor(private piceService: PiceService){}
  
  ngOnInit(): void {
    
    this.piceService.getAllPicaDTO().subscribe({
      next: (res: PiceFrontDto[]) => {
        this.pica=res;
      }
    })

  }

}
