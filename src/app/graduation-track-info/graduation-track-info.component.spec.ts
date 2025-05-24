import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationTrackInfoComponent } from './graduation-track-info.component';

describe('GraduationTrackInfoComponent', () => {
  let component: GraduationTrackInfoComponent;
  let fixture: ComponentFixture<GraduationTrackInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduationTrackInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduationTrackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
