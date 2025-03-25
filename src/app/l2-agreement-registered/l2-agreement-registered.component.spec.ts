import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2AgreementRegisteredComponent } from './l2-agreement-registered.component';

describe('L2AgreementRegisteredComponent', () => {
  let component: L2AgreementRegisteredComponent;
  let fixture: ComponentFixture<L2AgreementRegisteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2AgreementRegisteredComponent]
    });
    fixture = TestBed.createComponent(L2AgreementRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
