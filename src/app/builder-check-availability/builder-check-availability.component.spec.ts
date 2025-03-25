import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderCheckAvailabilityComponent } from './builder-check-availability.component';

describe('BuilderCheckAvailabilityComponent', () => {
  let component: BuilderCheckAvailabilityComponent;
  let fixture: ComponentFixture<BuilderCheckAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderCheckAvailabilityComponent]
    });
    fixture = TestBed.createComponent(BuilderCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
