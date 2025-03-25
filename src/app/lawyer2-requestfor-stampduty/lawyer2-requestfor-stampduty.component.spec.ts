import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer2RequestforStampdutyComponent } from './lawyer2-requestfor-stampduty.component';

describe('Lawyer2RequestforStampdutyComponent', () => {
  let component: Lawyer2RequestforStampdutyComponent;
  let fixture: ComponentFixture<Lawyer2RequestforStampdutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer2RequestforStampdutyComponent]
    });
    fixture = TestBed.createComponent(Lawyer2RequestforStampdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
