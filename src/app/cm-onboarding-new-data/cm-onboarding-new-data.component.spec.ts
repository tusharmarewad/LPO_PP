import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMOnboardingNewDataComponent } from './cm-onboarding-new-data.component';

describe('CMOnboardingNewDataComponent', () => {
  let component: CMOnboardingNewDataComponent;
  let fixture: ComponentFixture<CMOnboardingNewDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMOnboardingNewDataComponent]
    });
    fixture = TestBed.createComponent(CMOnboardingNewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
