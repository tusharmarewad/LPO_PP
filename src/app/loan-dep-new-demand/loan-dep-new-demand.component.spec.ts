import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepNewDemandComponent } from './loan-dep-new-demand.component';

describe('LoanDepNewDemandComponent', () => {
  let component: LoanDepNewDemandComponent;
  let fixture: ComponentFixture<LoanDepNewDemandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDepNewDemandComponent]
    });
    fixture = TestBed.createComponent(LoanDepNewDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
