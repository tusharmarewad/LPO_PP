import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterAgreementPrintComponent } from './printer-agreement-print.component';

describe('PrinterAgreementPrintComponent', () => {
  let component: PrinterAgreementPrintComponent;
  let fixture: ComponentFixture<PrinterAgreementPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterAgreementPrintComponent]
    });
    fixture = TestBed.createComponent(PrinterAgreementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
