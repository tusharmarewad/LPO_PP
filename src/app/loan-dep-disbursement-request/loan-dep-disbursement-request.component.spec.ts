import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepDisbursementRequestComponent } from './loan-dep-disbursement-request.component';

describe('LoanDepDisbursementRequestComponent', () => {
  let component: LoanDepDisbursementRequestComponent;
  let fixture: ComponentFixture<LoanDepDisbursementRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDepDisbursementRequestComponent]
    });
    fixture = TestBed.createComponent(LoanDepDisbursementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
