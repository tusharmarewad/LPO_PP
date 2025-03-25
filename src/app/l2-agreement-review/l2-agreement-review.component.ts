import { Component } from '@angular/core';

@Component({
  selector: 'app-l2-agreement-review',
  templateUrl: './l2-agreement-review.component.html',
  styleUrls: ['./l2-agreement-review.component.css']
})
export class L2AgreementReviewComponent {
  srn: string = '';
  clientId: string = '';
  clientName: string = '';
  project: string = '';
  unit: string = '';
  agreement: string = '';
  remark: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  // Method to handle "Resubmission" button click
  onResubmission() {
    console.log('Resubmission button clicked');
    console.log('Form Data:', this.getFormData());
  }

  // Method to handle "Execute Deal" button click
  onExecuteDeal() {
    console.log('Execute Deal button clicked');
    console.log('Form Data:', this.getFormData());
  }

  // Method to handle "Submit" button click
  onSubmit() {
    console.log('Submit button clicked');
    console.log('Form Data:', this.getFormData());
    alert('Form submitted successfully!');
  }

  // Helper method to get all form data
  getFormData() {
    return {
      srn: this.srn,
      clientId: this.clientId,
      clientName: this.clientName,
      project: this.project,
      unit: this.unit,
      agreement: this.agreement,
      remark: this.remark
    };
  }

}
