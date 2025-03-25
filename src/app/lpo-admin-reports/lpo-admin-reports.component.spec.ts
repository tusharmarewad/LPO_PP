import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminReportsComponent } from './lpo-admin-reports.component';

describe('LpoAdminReportsComponent', () => {
  let component: LpoAdminReportsComponent;
  let fixture: ComponentFixture<LpoAdminReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminReportsComponent]
    });
    fixture = TestBed.createComponent(LpoAdminReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
