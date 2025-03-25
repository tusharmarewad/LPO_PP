import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementRequestedComponent } from './agreement-requested.component';

describe('AgreementRequestedComponent', () => {
  let component: AgreementRequestedComponent;
  let fixture: ComponentFixture<AgreementRequestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementRequestedComponent]
    });
    fixture = TestBed.createComponent(AgreementRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
