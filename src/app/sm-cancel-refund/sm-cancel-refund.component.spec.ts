import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCancelRefundComponent } from './sm-cancel-refund.component';

describe('SmCancelRefundComponent', () => {
  let component: SmCancelRefundComponent;
  let fixture: ComponentFixture<SmCancelRefundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmCancelRefundComponent]
    });
    fixture = TestBed.createComponent(SmCancelRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
