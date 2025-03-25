import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExexutorClientAppointmentComponent } from './exexutor-client-appointment.component';

describe('ExexutorClientAppointmentComponent', () => {
  let component: ExexutorClientAppointmentComponent;
  let fixture: ComponentFixture<ExexutorClientAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExexutorClientAppointmentComponent]
    });
    fixture = TestBed.createComponent(ExexutorClientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
