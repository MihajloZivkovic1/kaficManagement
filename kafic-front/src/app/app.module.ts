import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { DrinkGalerryComponent } from './components/gallery/drink-galerry/drink-galerry.component';
import { DayVibeGalleryComponent } from './components/gallery/day-vibe-gallery/day-vibe-gallery.component';
import { NightLifeGalleryComponent } from './components/gallery/night-life-gallery/night-life-gallery.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { KorpaComponent } from './components/korpa/korpa.component';
import { FormsModule } from '@angular/forms';
import { SankerFrontComponent } from './components/sanker-front/sanker-front.component';
import { MenadzerFrontComponent } from './components/menadzer-front/menadzer-front.component';
import { NarudzbineComponent } from './components/menadzer-front/narudzbine/narudzbine.component';
import { NovoPiceComponent } from './components/menadzer-front/novo-pice/novo-pice.component';
import { PromenaCeneComponent } from './components/menadzer-front/promena-cene/promena-cene.component';
import { LagerComponent } from './components/menadzer-front/lager/lager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutSectionComponent,
    OurServicesComponent,
    DrinkMenuComponent,
    DrinkGalerryComponent,
    DayVibeGalleryComponent,
    NightLifeGalleryComponent,
    LoginComponent,
    KorpaComponent,
    SankerFrontComponent,
    MenadzerFrontComponent,
    NarudzbineComponent,
    NovoPiceComponent,
    PromenaCeneComponent,
    LagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000, positionClass: 'toast-bottom-right', preventDuplicates: false, progressBar: true }),
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
