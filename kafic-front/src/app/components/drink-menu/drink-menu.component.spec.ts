import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkMenuComponent } from './drink-menu.component';

describe('DrinkMenuComponent', () => {
  let component: DrinkMenuComponent;
  let fixture: ComponentFixture<DrinkMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
