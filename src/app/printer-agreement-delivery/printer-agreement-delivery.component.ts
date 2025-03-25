import { Component } from '@angular/core';

@Component({
  selector: 'app-printer-agreement-delivery',
  templateUrl: './printer-agreement-delivery.component.html',
  styleUrls: ['./printer-agreement-delivery.component.css']
})
export class PrinterAgreementDeliveryComponent {
  srn: string = '';
  clientId: string = '';
  clientName: string = '';
  project: string = '';
  approvalDeptStatus: string = '';
  approvalLetterStatus: string = 'XYZ'; // Default value
 

 

  onSubmit(): void {
    const requestData = {
      srn: this.srn,
      clientId: this.clientId,
      clientName: this.clientName,
      project: this.project,
      approvalDeptStatus: this.approvalDeptStatus,
      approvalLetterStatus: this.approvalLetterStatus,
     
    };
    console.log('Form data submitted:', requestData);
    // Implement further logic to handle form submission
  }
}
