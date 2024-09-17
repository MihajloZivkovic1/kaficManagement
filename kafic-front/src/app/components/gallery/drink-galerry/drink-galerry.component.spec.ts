import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkGalerryComponent } from './drink-galerry.component';

describe('DrinkGalerryComponent', () => {
  let component: DrinkGalerryComponent;
  let fixture: ComponentFixture<DrinkGalerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkGalerryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkGalerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
