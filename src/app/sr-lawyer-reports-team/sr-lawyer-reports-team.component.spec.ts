import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerReportsTeamComponent } from './sr-lawyer-reports-team.component';

describe('SrLawyerReportsTeamComponent', () => {
  let component: SrLawyerReportsTeamComponent;
  let fixture: ComponentFixture<SrLawyerReportsTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerReportsTeamComponent]
    });
    fixture = TestBed.createComponent(SrLawyerReportsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
