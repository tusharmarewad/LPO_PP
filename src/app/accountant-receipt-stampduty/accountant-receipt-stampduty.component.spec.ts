import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantReceiptStampdutyComponent } from './accountant-receipt-stampduty.component';

describe('AccountantReceiptStampdutyComponent', () => {
  let component: AccountantReceiptStampdutyComponent;
  let fixture: ComponentFixture<AccountantReceiptStampdutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantReceiptStampdutyComponent]
    });
    fixture = TestBed.createComponent(AccountantReceiptStampdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
