import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayVibeGalleryComponent } from './day-vibe-gallery.component';

describe('DayVibeGalleryComponent', () => {
  let component: DayVibeGalleryComponent;
  let fixture: ComponentFixture<DayVibeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayVibeGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayVibeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
