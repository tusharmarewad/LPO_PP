import { Component } from '@angular/core';

@Component({
  selector: 'app-printer-schedule-client',
  templateUrl: './printer-schedule-client.component.html',
  styleUrls: ['./printer-schedule-client.component.css']
})
export class PrinterScheduleClientComponent {
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
