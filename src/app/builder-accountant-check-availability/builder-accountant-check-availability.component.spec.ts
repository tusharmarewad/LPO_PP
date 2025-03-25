import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantCheckAvailabilityComponent } from './builder-accountant-check-availability.component';

describe('BuilderAccountantCheckAvailabilityComponent', () => {
  let component: BuilderAccountantCheckAvailabilityComponent;
  let fixture: ComponentFixture<BuilderAccountantCheckAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantCheckAvailabilityComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
