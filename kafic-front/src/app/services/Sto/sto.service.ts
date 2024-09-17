import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sto } from '../../models/Sto/sto';

@Injectable({
  providedIn: 'root'
})
export class StoService {

  readonly root = "http://localhost:8080/api/cont/";

  constructor(private http: HttpClient) { }

  getAllSLobodniStolovi(): Observable<Sto[]> {
    return this.http.get<Sto[]>(this.root + "getSlobodanSto");
  }

}
