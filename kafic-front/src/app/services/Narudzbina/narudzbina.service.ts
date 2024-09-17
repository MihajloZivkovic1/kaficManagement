import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NarudzbinaDTO } from '../../models/NarudzbinaDTO/narudzbina-dto';
import { Observable } from 'rxjs';
import { PiceNarudzbineDTO } from '../../models/PiceNarudzbineDTO/pice-narudzbine-dto';
import { NarudzbinaPiceDTO } from '../../models/NarudzbinaPiceDTO/narudzbina-pice-dto';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  readonly root = "http://localhost:8080/api/cont/";

  constructor(private http: HttpClient) { }

  getAllNarudzbine(): Observable<NarudzbinaPiceDTO[]> {
    return this.http.get<NarudzbinaPiceDTO[]>(this.root + "getSveNarudzbine");
  }

  createNarudzbina(narudzbinaDTO: NarudzbinaDTO) {
    return this.http.post(this.root + "saveNarudzbina", narudzbinaDTO);
  }

  spremno(id: number) {
    // const params = new HttpParams().set("id", id);
    return this.http.get(this.root + "setSpremnoToTrue/" + id);
  }

}
