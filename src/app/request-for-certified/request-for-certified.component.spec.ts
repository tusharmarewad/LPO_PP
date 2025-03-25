import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForCertifiedComponent } from './request-for-certified.component';

describe('RequestForCertifiedComponent', () => {
  let component: RequestForCertifiedComponent;
  let fixture: ComponentFixture<RequestForCertifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForCertifiedComponent]
    });
    fixture = TestBed.createComponent(RequestForCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
