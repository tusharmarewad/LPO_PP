import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2NewdraftResubmissionComponent } from './l2-newdraft-resubmission.component';

describe('L2NewdraftResubmissionComponent', () => {
  let component: L2NewdraftResubmissionComponent;
  let fixture: ComponentFixture<L2NewdraftResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2NewdraftResubmissionComponent]
    });
    fixture = TestBed.createComponent(L2NewdraftResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
