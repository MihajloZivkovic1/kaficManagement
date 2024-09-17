import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightLifeGalleryComponent } from './night-life-gallery.component';

describe('NightLifeGalleryComponent', () => {
  let component: NightLifeGalleryComponent;
  let fixture: ComponentFixture<NightLifeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NightLifeGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightLifeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
