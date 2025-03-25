import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminDraftNewAgreementComponent } from './lpo-admin-draft-new-agreement.component';

describe('LpoAdminDraftNewAgreementComponent', () => {
  let component: LpoAdminDraftNewAgreementComponent;
  let fixture: ComponentFixture<LpoAdminDraftNewAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminDraftNewAgreementComponent]
    });
    fixture = TestBed.createComponent(LpoAdminDraftNewAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
