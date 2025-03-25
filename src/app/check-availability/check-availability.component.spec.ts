import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAvailabilityComponent } from './check-availability.component';

describe('CheckAvailabilityComponent', () => {
  let component: CheckAvailabilityComponent;
  let fixture: ComponentFixture<CheckAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckAvailabilityComponent]
    });
    fixture = TestBed.createComponent(CheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
