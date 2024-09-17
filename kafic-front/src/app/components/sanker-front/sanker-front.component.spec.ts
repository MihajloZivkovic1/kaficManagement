import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankerFrontComponent } from './sanker-front.component';

describe('SankerFrontComponent', () => {
  let component: SankerFrontComponent;
  let fixture: ComponentFixture<SankerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SankerFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SankerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
