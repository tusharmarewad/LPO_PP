import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrLawyerReportsAgreementsComponent } from './sr-lawyer-reports-agreements.component';

describe('SrLawyerReportsAgreementsComponent', () => {
  let component: SrLawyerReportsAgreementsComponent;
  let fixture: ComponentFixture<SrLawyerReportsAgreementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrLawyerReportsAgreementsComponent]
    });
    fixture = TestBed.createComponent(SrLawyerReportsAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
