import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementResubmisionComponent } from './agreement-resubmision.component';

describe('AgreementResubmisionComponent', () => {
  let component: AgreementResubmisionComponent;
  let fixture: ComponentFixture<AgreementResubmisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementResubmisionComponent]
    });
    fixture = TestBed.createComponent(AgreementResubmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
