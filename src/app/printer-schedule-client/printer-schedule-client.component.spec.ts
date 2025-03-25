import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterScheduleClientComponent } from './printer-schedule-client.component';

describe('PrinterScheduleClientComponent', () => {
  let component: PrinterScheduleClientComponent;
  let fixture: ComponentFixture<PrinterScheduleClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterScheduleClientComponent]
    });
    fixture = TestBed.createComponent(PrinterScheduleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
