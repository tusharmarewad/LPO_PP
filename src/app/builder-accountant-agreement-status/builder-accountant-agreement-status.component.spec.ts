import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantAgreementStatusComponent } from './builder-accountant-agreement-status.component';

describe('BuilderAccountantAgreementStatusComponent', () => {
  let component: BuilderAccountantAgreementStatusComponent;
  let fixture: ComponentFixture<BuilderAccountantAgreementStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantAgreementStatusComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantAgreementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
