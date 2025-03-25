import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantPaymentCertifiedComponent } from './accountant-payment-certified.component';

describe('AccountantPaymentCertifiedComponent', () => {
  let component: AccountantPaymentCertifiedComponent;
  let fixture: ComponentFixture<AccountantPaymentCertifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantPaymentCertifiedComponent]
    });
    fixture = TestBed.createComponent(AccountantPaymentCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
