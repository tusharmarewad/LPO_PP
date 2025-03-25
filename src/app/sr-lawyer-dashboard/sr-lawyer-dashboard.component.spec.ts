import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerDashboardComponent } from './sr-lawyer-dashboard.component';

describe('SrLawyerDashboardComponent', () => {
  let component: SrLawyerDashboardComponent;
  let fixture: ComponentFixture<SrLawyerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerDashboardComponent]
    });
    fixture = TestBed.createComponent(SrLawyerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
