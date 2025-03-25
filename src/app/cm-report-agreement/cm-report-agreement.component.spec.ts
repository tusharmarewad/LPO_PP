import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMReportAgreementComponent } from './cm-report-agreement.component';

describe('CMReportAgreementComponent', () => {
  let component: CMReportAgreementComponent;
  let fixture: ComponentFixture<CMReportAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMReportAgreementComponent]
    });
    fixture = TestBed.createComponent(CMReportAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
