import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminLoginProjectDetailsComponent } from './lpo-admin-login-project-details.component';

describe('LpoAdminLoginProjectDetailsComponent', () => {
  let component: LpoAdminLoginProjectDetailsComponent;
  let fixture: ComponentFixture<LpoAdminLoginProjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminLoginProjectDetailsComponent]
    });
    fixture = TestBed.createComponent(LpoAdminLoginProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
