import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer2DashboardComponent } from './lawyer2-dashboard.component';

describe('Lawyer2DashboardComponent', () => {
  let component: Lawyer2DashboardComponent;
  let fixture: ComponentFixture<Lawyer2DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer2DashboardComponent]
    });
    fixture = TestBed.createComponent(Lawyer2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
