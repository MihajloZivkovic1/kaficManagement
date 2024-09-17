import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPiceComponent } from './novo-pice.component';

describe('NovoPiceComponent', () => {
  let component: NovoPiceComponent;
  let fixture: ComponentFixture<NovoPiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoPiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
