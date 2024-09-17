import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zaposleni } from '../../models/Zaposleni/zaposleni';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {

  readonly root = "http://localhost:8080/api/cont/";

  constructor(private http: HttpClient) { }

  getZaposleniLogin(korisnicko: string, lozinka: string): Observable<Zaposleni> {
    const params = new HttpParams().set("us", korisnicko).set("ps", lozinka);
    return this.http.get<Zaposleni>(this.root + "getZaposlenogLogin", { params });
  }

}
