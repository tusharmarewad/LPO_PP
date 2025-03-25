import { Component } from '@angular/core';

@Component({
  selector: 'app-exexutor-builder-appointment',
  templateUrl: './exexutor-builder-appointment.component.html',
  styleUrls: ['./exexutor-builder-appointment.component.css']
})
export class ExexutorBuilderAppointmentComponent {
  formData = {
    srn: '',
    clientId: '',
    clientName: '',
    contactNumber: '',
    emailId: '',
    appointmentDate: '',
    time: '',
    venue: '',
    mode: '',
    appointmentNumber: ''
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
    alert('Form submitted successfully!');
  }
}
