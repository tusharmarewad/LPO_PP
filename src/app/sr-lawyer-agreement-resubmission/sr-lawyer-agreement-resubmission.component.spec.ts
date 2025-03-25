import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerAgreementResubmissionComponent } from './sr-lawyer-agreement-resubmission.component';

describe('SrLawyerAgreementResubmissionComponent', () => {
  let component: SrLawyerAgreementResubmissionComponent;
  let fixture: ComponentFixture<SrLawyerAgreementResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerAgreementResubmissionComponent]
    });
    fixture = TestBed.createComponent(SrLawyerAgreementResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
