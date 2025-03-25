import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTeamPerformanceComponent } from './sm-team-performance.component';

describe('SmTeamPerformanceComponent', () => {
  let component: SmTeamPerformanceComponent;
  let fixture: ComponentFixture<SmTeamPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmTeamPerformanceComponent]
    });
    fixture = TestBed.createComponent(SmTeamPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
