import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantReportsComponent } from './builder-accountant-reports.component';

describe('BuilderAccountantReportsComponent', () => {
  let component: BuilderAccountantReportsComponent;
  let fixture: ComponentFixture<BuilderAccountantReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantReportsComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
