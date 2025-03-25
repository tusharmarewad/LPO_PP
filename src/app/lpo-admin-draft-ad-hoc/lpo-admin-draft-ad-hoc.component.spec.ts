import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoAdminDraftAdHocComponent } from './lpo-admin-draft-ad-hoc.component';

describe('LpoAdminDraftAdHocComponent', () => {
  let component: LpoAdminDraftAdHocComponent;
  let fixture: ComponentFixture<LpoAdminDraftAdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpoAdminDraftAdHocComponent]
    });
    fixture = TestBed.createComponent(LpoAdminDraftAdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
