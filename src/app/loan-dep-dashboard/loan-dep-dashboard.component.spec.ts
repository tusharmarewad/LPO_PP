import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepDashboardComponent } from './loan-dep-dashboard.component';

describe('LoanDepDashboardComponent', () => {
  let component: LoanDepDashboardComponent;
  let fixture: ComponentFixture<LoanDepDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDepDashboardComponent]
    });
    fixture = TestBed.createComponent(LoanDepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
