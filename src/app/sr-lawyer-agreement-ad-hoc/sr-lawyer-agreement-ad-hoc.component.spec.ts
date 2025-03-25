import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerAgreementAdHocComponent } from './sr-lawyer-agreement-ad-hoc.component';

describe('SrLawyerAgreementAdHocComponent', () => {
  let component: SrLawyerAgreementAdHocComponent;
  let fixture: ComponentFixture<SrLawyerAgreementAdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerAgreementAdHocComponent]
    });
    fixture = TestBed.createComponent(SrLawyerAgreementAdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
