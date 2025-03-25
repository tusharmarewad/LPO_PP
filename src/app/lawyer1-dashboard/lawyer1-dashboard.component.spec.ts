import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer1DashboardComponent } from './lawyer1-dashboard.component';

describe('Lawyer1DashboardComponent', () => {
  let component: Lawyer1DashboardComponent;
  let fixture: ComponentFixture<Lawyer1DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer1DashboardComponent]
    });
    fixture = TestBed.createComponent(Lawyer1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
