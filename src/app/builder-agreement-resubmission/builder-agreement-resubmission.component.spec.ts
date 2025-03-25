import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAgreementResubmissionComponent } from './builder-agreement-resubmission.component';

describe('BuilderAgreementResubmissionComponent', () => {
  let component: BuilderAgreementResubmissionComponent;
  let fixture: ComponentFixture<BuilderAgreementResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAgreementResubmissionComponent]
    });
    fixture = TestBed.createComponent(BuilderAgreementResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
