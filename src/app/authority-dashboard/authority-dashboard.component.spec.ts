import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityDashboardComponent } from './authority-dashboard.component';

describe('AuthorityDashboardComponent', () => {
  let component: AuthorityDashboardComponent;
  let fixture: ComponentFixture<AuthorityDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityDashboardComponent]
    });
    fixture = TestBed.createComponent(AuthorityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
