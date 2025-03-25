import { Component } from '@angular/core';

@Component({
  selector: 'app-agreement-registered',
  templateUrl: './agreement-registered.component.html',
  styleUrls: ['./agreement-registered.component.css']
})
export class AgreementRegisteredComponent {

  clientId: string = '';
  prefix: string = '';
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';

  prefixOptions: string[] = ['Mr.', 'Ms.', 'Dr.', 'Prof.'];

  submitForm() {
    const formData = {
      clientId: this.clientId,
      prefix: this.prefix,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
    };

    console.log('Form Data Submitted:', formData);
    alert('Form Submitted Successfully!');
  }

  openRegisteredAgreement() {
    alert('Registered Agreement button clicked!');
    console.log('Registered Agreement button clicked');
  }
}
