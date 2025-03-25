import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantPaymentStampdutyComponent } from './accountant-payment-stampduty.component';

describe('AccountantPaymentStampdutyComponent', () => {
  let component: AccountantPaymentStampdutyComponent;
  let fixture: ComponentFixture<AccountantPaymentStampdutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantPaymentStampdutyComponent]
    });
    fixture = TestBed.createComponent(AccountantPaymentStampdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
