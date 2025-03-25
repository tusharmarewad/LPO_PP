import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer2CreateScheduleComponent } from './lawyer2-create-schedule.component';

describe('Lawyer2CreateScheduleComponent', () => {
  let component: Lawyer2CreateScheduleComponent;
  let fixture: ComponentFixture<Lawyer2CreateScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer2CreateScheduleComponent]
    });
    fixture = TestBed.createComponent(Lawyer2CreateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
