import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2AgreementReviewComponent } from './l2-agreement-review.component';

describe('L2AgreementReviewComponent', () => {
  let component: L2AgreementReviewComponent;
  let fixture: ComponentFixture<L2AgreementReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2AgreementReviewComponent]
    });
    fixture = TestBed.createComponent(L2AgreementReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
