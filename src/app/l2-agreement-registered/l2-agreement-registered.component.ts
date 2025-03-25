import { Component } from '@angular/core';

@Component({
  selector: 'app-l2-agreement-registered',
  templateUrl: './l2-agreement-registered.component.html',
  styleUrls: ['./l2-agreement-registered.component.css']
})
export class L2AgreementRegisteredComponent {
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
