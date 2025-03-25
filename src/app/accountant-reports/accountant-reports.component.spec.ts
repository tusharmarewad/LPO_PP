import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantReportsComponent } from './accountant-reports.component';

describe('AccountantReportsComponent', () => {
  let component: AccountantReportsComponent;
  let fixture: ComponentFixture<AccountantReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountantReportsComponent]
    });
    fixture = TestBed.createComponent(AccountantReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
