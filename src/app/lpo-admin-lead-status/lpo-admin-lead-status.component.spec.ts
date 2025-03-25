import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminLeadStatusComponent } from './lpo-admin-lead-status.component';

describe('LpoAdminLeadStatusComponent', () => {
  let component: LpoAdminLeadStatusComponent;
  let fixture: ComponentFixture<LpoAdminLeadStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminLeadStatusComponent]
    });
    fixture = TestBed.createComponent(LpoAdminLeadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
