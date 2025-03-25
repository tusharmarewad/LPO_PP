import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMOnboardingModifyComponent } from './cm-onboarding-modify.component';

describe('CMOnboardingModifyComponent', () => {
  let component: CMOnboardingModifyComponent;
  let fixture: ComponentFixture<CMOnboardingModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMOnboardingModifyComponent]
    });
    fixture = TestBed.createComponent(CMOnboardingModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
