import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-dep-new-demand',
  templateUrl: './loan-dep-new-demand.component.html',
  styleUrls: ['./loan-dep-new-demand.component.css']
})
export class LoanDepNewDemandComponent {
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
