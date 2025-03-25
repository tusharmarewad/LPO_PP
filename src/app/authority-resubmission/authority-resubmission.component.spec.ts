import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityResubmissionComponent } from './authority-resubmission.component';

describe('AuthorityResubmissionComponent', () => {
  let component: AuthorityResubmissionComponent;
  let fixture: ComponentFixture<AuthorityResubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityResubmissionComponent]
    });
    fixture = TestBed.createComponent(AuthorityResubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
