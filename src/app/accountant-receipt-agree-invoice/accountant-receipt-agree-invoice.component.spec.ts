import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantReceiptAgreeInvoiceComponent } from './accountant-receipt-agree-invoice.component';

describe('AccountantReceiptAgreeInvoiceComponent', () => {
  let component: AccountantReceiptAgreeInvoiceComponent;
  let fixture: ComponentFixture<AccountantReceiptAgreeInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantReceiptAgreeInvoiceComponent]
    });
    fixture = TestBed.createComponent(AccountantReceiptAgreeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
