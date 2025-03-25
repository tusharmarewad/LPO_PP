import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmClientBankComponent } from './sm-client-bank.component';

describe('SmClientBankComponent', () => {
  let component: SmClientBankComponent;
  let fixture: ComponentFixture<SmClientBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmClientBankComponent]
    });
    fixture = TestBed.createComponent(SmClientBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
