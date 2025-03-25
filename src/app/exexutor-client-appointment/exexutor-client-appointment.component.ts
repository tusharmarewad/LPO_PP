import { Component } from '@angular/core';

@Component({
  selector: 'app-exexutor-client-appointment',
  templateUrl: './exexutor-client-appointment.component.html',
  styleUrls: ['./exexutor-client-appointment.component.css']
})
export class ExexutorClientAppointmentComponent {
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
