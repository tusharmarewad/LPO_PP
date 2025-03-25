import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerAgreementsNewAgreementsComponent } from './sr-lawyer-agreements-new-agreements.component';

describe('SrLawyerAgreementsNewAgreementsComponent', () => {
  let component: SrLawyerAgreementsNewAgreementsComponent;
  let fixture: ComponentFixture<SrLawyerAgreementsNewAgreementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerAgreementsNewAgreementsComponent]
    });
    fixture = TestBed.createComponent(SrLawyerAgreementsNewAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
