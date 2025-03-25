import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantDashboardComponent } from './builder-accountant-dashboard.component';

describe('BuilderAccountantDashboardComponent', () => {
  let component: BuilderAccountantDashboardComponent;
  let fixture: ComponentFixture<BuilderAccountantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantDashboardComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
