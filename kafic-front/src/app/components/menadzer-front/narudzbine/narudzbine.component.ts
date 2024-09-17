import { Component, OnInit } from '@angular/core';
import { NarudzbinaDTO } from '../../../models/NarudzbinaDTO/narudzbina-dto';
import { NarudzbinaService } from '../../../services/Narudzbina/narudzbina.service';
import { NarudzbinaPiceDTO } from '../../../models/NarudzbinaPiceDTO/narudzbina-pice-dto';

@Component({
  selector: 'app-narudzbine',
  templateUrl: './narudzbine.component.html',
  styleUrl: './narudzbine.component.css'
})
export class NarudzbineComponent implements OnInit{

  narudzbine: NarudzbinaPiceDTO[];
  sveNarudzbine: NarudzbinaPiceDTO[];

  constructor(
    private narService: NarudzbinaService,
  ){}

  ngOnInit(): void {
    this.narudzbine = JSON.parse(localStorage.getItem("sanker-front") || "[]");

    this.narService.getAllNarudzbine().subscribe(res => {
      this.narudzbine = res;
      this.sveNarudzbine = res;
    });
  }

}
