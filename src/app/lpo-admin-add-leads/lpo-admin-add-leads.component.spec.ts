import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminAddLeadsComponent } from './lpo-admin-add-leads.component';

describe('LpoAdminAddLeadsComponent', () => {
  let component: LpoAdminAddLeadsComponent;
  let fixture: ComponentFixture<LpoAdminAddLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminAddLeadsComponent]
    });
    fixture = TestBed.createComponent(LpoAdminAddLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
