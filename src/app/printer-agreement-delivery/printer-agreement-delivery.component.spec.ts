import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterAgreementDeliveryComponent } from './printer-agreement-delivery.component';

describe('PrinterAgreementDeliveryComponent', () => {
  let component: PrinterAgreementDeliveryComponent;
  let fixture: ComponentFixture<PrinterAgreementDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterAgreementDeliveryComponent]
    });
    fixture = TestBed.createComponent(PrinterAgreementDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
