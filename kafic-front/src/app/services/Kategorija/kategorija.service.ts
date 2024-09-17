import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Kategorija } from '../../models/Kategorija/kategorija';

@Injectable({
  providedIn: 'root'
})
export class KategorijaService {

  readonly root = "http://localhost:8080/api/cont/"

  constructor(private http: HttpClient) { }

  getAllKategorije(): Observable<Kategorija[]> {
    return this.http.get<Kategorija[]>(this.root + "getKategorije");
  }
}
