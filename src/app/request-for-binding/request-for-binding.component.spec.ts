import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForBindingComponent } from './request-for-binding.component';

describe('RequestForBindingComponent', () => {
  let component: RequestForBindingComponent;
  let fixture: ComponentFixture<RequestForBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForBindingComponent]
    });
    fixture = TestBed.createComponent(RequestForBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
