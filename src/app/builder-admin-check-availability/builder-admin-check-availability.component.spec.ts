import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminCheckAvailabilityComponent } from './builder-admin-check-availability.component';

describe('BuilderAdminCheckAvailabilityComponent', () => {
  let component: BuilderAdminCheckAvailabilityComponent;
  let fixture: ComponentFixture<BuilderAdminCheckAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminCheckAvailabilityComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminCheckAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
