import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDashboardComponent } from './printer-dashboard.component';

describe('PrinterDashboardComponent', () => {
  let component: PrinterDashboardComponent;
  let fixture: ComponentFixture<PrinterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterDashboardComponent]
    });
    fixture = TestBed.createComponent(PrinterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
