import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExexutorBuilderAppointmentComponent } from './exexutor-builder-appointment.component';

describe('ExexutorBuilderAppointmentComponent', () => {
  let component: ExexutorBuilderAppointmentComponent;
  let fixture: ComponentFixture<ExexutorBuilderAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExexutorBuilderAppointmentComponent]
    });
    fixture = TestBed.createComponent(ExexutorBuilderAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
