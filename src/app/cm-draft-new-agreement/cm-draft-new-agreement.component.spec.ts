import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMDraftNewAgreementComponent } from './cm-draft-new-agreement.component';

describe('CMDraftNewAgreementComponent', () => {
  let component: CMDraftNewAgreementComponent;
  let fixture: ComponentFixture<CMDraftNewAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMDraftNewAgreementComponent]
    });
    fixture = TestBed.createComponent(CMDraftNewAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
