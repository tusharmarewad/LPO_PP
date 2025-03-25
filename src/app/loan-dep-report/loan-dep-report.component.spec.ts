import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepReportComponent } from './loan-dep-report.component';

describe('LoanDepReportComponent', () => {
  let component: LoanDepReportComponent;
  let fixture: ComponentFixture<LoanDepReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDepReportComponent]
    });
    fixture = TestBed.createComponent(LoanDepReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
