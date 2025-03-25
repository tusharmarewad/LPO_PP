import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantReceiptAdHocComponent } from './accountant-receipt-ad-hoc.component';

describe('AccountantReceiptAdHocComponent', () => {
  let component: AccountantReceiptAdHocComponent;
  let fixture: ComponentFixture<AccountantReceiptAdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantReceiptAdHocComponent]
    });
    fixture = TestBed.createComponent(AccountantReceiptAdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
