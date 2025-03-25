import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementRegisteredComponent } from './agreement-registered.component';

describe('AgreementRegisteredComponent', () => {
  let component: AgreementRegisteredComponent;
  let fixture: ComponentFixture<AgreementRegisteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementRegisteredComponent]
    });
    fixture = TestBed.createComponent(AgreementRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
