import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForStampdutyComponent } from './request-for-stampduty.component';

describe('RequestForStampdutyComponent', () => {
  let component: RequestForStampdutyComponent;
  let fixture: ComponentFixture<RequestForStampdutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForStampdutyComponent]
    });
    fixture = TestBed.createComponent(RequestForStampdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
