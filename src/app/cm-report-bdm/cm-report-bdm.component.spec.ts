import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMReportBdmComponent } from './cm-report-bdm.component';

describe('CMReportBdmComponent', () => {
  let component: CMReportBdmComponent;
  let fixture: ComponentFixture<CMReportBdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMReportBdmComponent]
    });
    fixture = TestBed.createComponent(CMReportBdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
