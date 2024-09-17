import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerFrontComponent } from './menadzer-front.component';

describe('MenadzerFrontComponent', () => {
  let component: MenadzerFrontComponent;
  let fixture: ComponentFixture<MenadzerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenadzerFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
