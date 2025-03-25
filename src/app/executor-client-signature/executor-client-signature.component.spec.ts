import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorClientSignatureComponent } from './executor-client-signature.component';

describe('ExecutorClientSignatureComponent', () => {
  let component: ExecutorClientSignatureComponent;
  let fixture: ComponentFixture<ExecutorClientSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutorClientSignatureComponent]
    });
    fixture = TestBed.createComponent(ExecutorClientSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
