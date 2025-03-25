import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorBuilderSignatureComponent } from './executor-builder-signature.component';

describe('ExecutorBuilderSignatureComponent', () => {
  let component: ExecutorBuilderSignatureComponent;
  let fixture: ComponentFixture<ExecutorBuilderSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutorBuilderSignatureComponent]
    });
    fixture = TestBed.createComponent(ExecutorBuilderSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
