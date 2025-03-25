import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBankComponent } from './client-bank.component';

describe('ClientBankComponent', () => {
  let component: ClientBankComponent;
  let fixture: ComponentFixture<ClientBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientBankComponent]
    });
    fixture = TestBed.createComponent(ClientBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
