import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepRequestComponent } from './loan-dep-request.component';

describe('LoanDepRequestComponent', () => {
  let component: LoanDepRequestComponent;
  let fixture: ComponentFixture<LoanDepRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDepRequestComponent]
    });
    fixture = TestBed.createComponent(LoanDepRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
