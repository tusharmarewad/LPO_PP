import { Component } from '@angular/core';

@Component({
  selector: 'app-printer-agreement-print',
  templateUrl: './printer-agreement-print.component.html',
  styleUrls: ['./printer-agreement-print.component.css']
})
export class PrinterAgreementPrintComponent {
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
