import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcuterDashboardComponent } from './excuter-dashboard.component';

describe('ExcuterDashboardComponent', () => {
  let component: ExcuterDashboardComponent;
  let fixture: ComponentFixture<ExcuterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcuterDashboardComponent]
    });
    fixture = TestBed.createComponent(ExcuterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
