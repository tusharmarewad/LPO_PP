import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTeamPerformanceParticularComponent } from './sm-team-performance-particular.component';

describe('SmTeamPerformanceParticularComponent', () => {
  let component: SmTeamPerformanceParticularComponent;
  let fixture: ComponentFixture<SmTeamPerformanceParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmTeamPerformanceParticularComponent]
    });
    fixture = TestBed.createComponent(SmTeamPerformanceParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
