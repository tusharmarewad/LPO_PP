import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminSalesReportComponent } from './builder-admin-sales-report.component';

describe('BuilderAdminSalesReportComponent', () => {
  let component: BuilderAdminSalesReportComponent;
  let fixture: ComponentFixture<BuilderAdminSalesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminSalesReportComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
