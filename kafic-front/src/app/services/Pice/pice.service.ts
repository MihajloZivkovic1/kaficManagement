import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pice } from '../../models/Pice/pice';
import { PiceFrontDto } from '../../models/PiceFrontDTO/pice-front-dto';

@Injectable({
  providedIn: 'root'
})
export class PiceService {

  readonly root = "http://localhost:8080/api/cont/"

  constructor(private http: HttpClient) { }

  getAllPica(): Observable<Pice[]> {
    return this.http.get<Pice[]>(this.root + "getSvaPica");
  }

  getAllPicaDTO(): Observable<PiceFrontDto[]> {
    return this.http.get<PiceFrontDto[]>(this.root + "getPicaFrontDTO");
  }

  izmeniCenu(nazivPica: string, novaCena: number): Observable<any> {
    const params = new HttpParams().set("naziv", nazivPica).set("novaCena", novaCena);
    return this.http.get(this.root + "izmeniCenu", { params });
  }

  dodajUMagacin(id: number, kolicina: number) {
    console.log(id);
    console.log(kolicina);
    const params = new HttpParams().set("id", id).set("kolicina", kolicina);
    return this.http.get(this.root + "savePiceMagacin", { params });
  }

}
