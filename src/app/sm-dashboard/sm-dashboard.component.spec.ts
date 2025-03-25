import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmDashboardComponent } from './sm-dashboard.component';

describe('SmDashboardComponent', () => {
  let component: SmDashboardComponent;
  let fixture: ComponentFixture<SmDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmDashboardComponent]
    });
    fixture = TestBed.createComponent(SmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
