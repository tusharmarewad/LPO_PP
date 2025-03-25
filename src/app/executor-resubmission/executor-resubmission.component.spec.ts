import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorResubmissionComponent } from './executor-resubmission.component';

describe('ExecutorResubmissionComponent', () => {
  let component: ExecutorResubmissionComponent;
  let fixture: ComponentFixture<ExecutorResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutorResubmissionComponent]
    });
    fixture = TestBed.createComponent(ExecutorResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
