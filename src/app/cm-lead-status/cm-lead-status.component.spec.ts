import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMLeadStatusComponent } from './cm-lead-status.component';

describe('CMLeadStatusComponent', () => {
  let component: CMLeadStatusComponent;
  let fixture: ComponentFixture<CMLeadStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMLeadStatusComponent]
    });
    fixture = TestBed.createComponent(CMLeadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
