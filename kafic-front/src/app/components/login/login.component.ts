import { Component } from '@angular/core';
import { ZaposleniService } from '../../services/Zaposleni/zaposleni.service';
import { Zaposleni } from '../../models/Zaposleni/zaposleni';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  korisnicko: string = '';
  lozinka: string = '';

  constructor(private zaposleniService: ZaposleniService){}

  onLogin(): void{
    this.zaposleniService.getZaposleniLogin(this.korisnicko, this.lozinka).subscribe({
      next: (zaposleni:Zaposleni) => {
        console.log('Prijavljeni zaposleni tr: ', zaposleni);
      },
      error: (err ) => {
        console.error('Greska prilikom prijave: ', err);
      }
    });
  }
}
