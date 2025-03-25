import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantPaymentMiscellaneousComponent } from './accountant-payment-miscellaneous.component';

describe('AccountantPaymentMiscellaneousComponent', () => {
  let component: AccountantPaymentMiscellaneousComponent;
  let fixture: ComponentFixture<AccountantPaymentMiscellaneousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantPaymentMiscellaneousComponent]
    });
    fixture = TestBed.createComponent(AccountantPaymentMiscellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
