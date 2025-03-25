import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSalesTargetComponent } from './sm-sales-target.component';

describe('SmSalesTargetComponent', () => {
  let component: SmSalesTargetComponent;
  let fixture: ComponentFixture<SmSalesTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmSalesTargetComponent]
    });
    fixture = TestBed.createComponent(SmSalesTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
