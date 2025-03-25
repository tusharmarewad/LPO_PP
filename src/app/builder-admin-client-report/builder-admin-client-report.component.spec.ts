import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminClientReportComponent } from './builder-admin-client-report.component';

describe('BuilderAdminClientReportComponent', () => {
  let component: BuilderAdminClientReportComponent;
  let fixture: ComponentFixture<BuilderAdminClientReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminClientReportComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminClientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
