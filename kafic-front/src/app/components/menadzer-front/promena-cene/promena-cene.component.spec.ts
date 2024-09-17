import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaCeneComponent } from './promena-cene.component';

describe('PromenaCeneComponent', () => {
  let component: PromenaCeneComponent;
  let fixture: ComponentFixture<PromenaCeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromenaCeneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromenaCeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
