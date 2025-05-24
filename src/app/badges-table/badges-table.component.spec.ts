import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesTableComponent } from './badges-table.component';

describe('BadgesTableComponent', () => {
  let component: BadgesTableComponent;
  let fixture: ComponentFixture<BadgesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
