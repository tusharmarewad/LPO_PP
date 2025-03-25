import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAgreementExecutionComponent } from './builder-agreement-execution.component';

describe('BuilderAgreementExecutionComponent', () => {
  let component: BuilderAgreementExecutionComponent;
  let fixture: ComponentFixture<BuilderAgreementExecutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAgreementExecutionComponent]
    });
    fixture = TestBed.createComponent(BuilderAgreementExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
