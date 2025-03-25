import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterScheduleBuilderComponent } from './printer-schedule-builder.component';

describe('PrinterScheduleBuilderComponent', () => {
  let component: PrinterScheduleBuilderComponent;
  let fixture: ComponentFixture<PrinterScheduleBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterScheduleBuilderComponent]
    });
    fixture = TestBed.createComponent(PrinterScheduleBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
