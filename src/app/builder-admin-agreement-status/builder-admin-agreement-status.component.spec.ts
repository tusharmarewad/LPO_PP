import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminAgreementStatusComponent } from './builder-admin-agreement-status.component';

describe('BuilderAdminAgreementStatusComponent', () => {
  let component: BuilderAdminAgreementStatusComponent;
  let fixture: ComponentFixture<BuilderAdminAgreementStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminAgreementStatusComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminAgreementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
