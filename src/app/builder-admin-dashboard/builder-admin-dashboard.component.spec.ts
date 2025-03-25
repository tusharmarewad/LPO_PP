import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminDashboardComponent } from './builder-admin-dashboard.component';

describe('BuilderAdminDashboardComponent', () => {
  let component: BuilderAdminDashboardComponent;
  let fixture: ComponentFixture<BuilderAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
