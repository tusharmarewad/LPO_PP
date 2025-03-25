import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCheckAvailabilityComponent } from './sm-check-availability.component';

describe('SmCheckAvailabilityComponent', () => {
  let component: SmCheckAvailabilityComponent;
  let fixture: ComponentFixture<SmCheckAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmCheckAvailabilityComponent]
    });
    fixture = TestBed.createComponent(SmCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
