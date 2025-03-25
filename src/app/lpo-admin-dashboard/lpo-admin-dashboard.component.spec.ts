import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminDashboardComponent } from './lpo-admin-dashboard.component';

describe('LpoAdminDashboardComponent', () => {
  let component: LpoAdminDashboardComponent;
  let fixture: ComponentFixture<LpoAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(LpoAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
