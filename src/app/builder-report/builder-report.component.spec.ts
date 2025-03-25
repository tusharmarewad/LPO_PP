import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderReportComponent } from './builder-report.component';

describe('BuilderReportComponent', () => {
  let component: BuilderReportComponent;
  let fixture: ComponentFixture<BuilderReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderReportComponent]
    });
    fixture = TestBed.createComponent(BuilderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
