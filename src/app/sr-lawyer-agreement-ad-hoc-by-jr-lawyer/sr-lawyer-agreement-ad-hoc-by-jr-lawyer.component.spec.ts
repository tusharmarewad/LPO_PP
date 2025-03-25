import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerAgreementAdHocByJrLawyerComponent } from './sr-lawyer-agreement-ad-hoc-by-jr-lawyer.component';

describe('SrLawyerAgreementAdHocByJrLawyerComponent', () => {
  let component: SrLawyerAgreementAdHocByJrLawyerComponent;
  let fixture: ComponentFixture<SrLawyerAgreementAdHocByJrLawyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerAgreementAdHocByJrLawyerComponent]
    });
    fixture = TestBed.createComponent(SrLawyerAgreementAdHocByJrLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
