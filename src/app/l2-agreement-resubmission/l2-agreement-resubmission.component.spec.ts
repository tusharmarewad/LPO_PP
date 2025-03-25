import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2AgreementResubmissionComponent } from './l2-agreement-resubmission.component';

describe('L2AgreementResubmissionComponent', () => {
  let component: L2AgreementResubmissionComponent;
  let fixture: ComponentFixture<L2AgreementResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2AgreementResubmissionComponent]
    });
    fixture = TestBed.createComponent(L2AgreementResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
