import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantExecutorReportComponent } from './builder-accountant-executor-report.component';

describe('BuilderAccountantExecutorReportComponent', () => {
  let component: BuilderAccountantExecutorReportComponent;
  let fixture: ComponentFixture<BuilderAccountantExecutorReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantExecutorReportComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantExecutorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
