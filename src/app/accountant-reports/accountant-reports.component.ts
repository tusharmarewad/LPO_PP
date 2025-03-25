import { Component } from '@angular/core';

@Component({
  selector: 'app-accountant-reports',
  templateUrl: './accountant-reports.component.html',
  styleUrls: ['./accountant-reports.component.css']
})
export class AccountantReportsComponent {
  filters = {
    fromDate: '',
    toDate: '',
    agreements: '',
    legalFees: '',
    stampDuty: '',
    certifiedCopy: '',
    status: ''
  };

  agreementsList = ['Agreement 1', 'Agreement 2', 'Agreement 3'];
  legalFeesList = ['Fee 1', 'Fee 2', 'Fee 3'];
  stampDutyList = ['Duty 1', 'Duty 2', 'Duty 3'];
  certifiedCopyList = ['Copy 1', 'Copy 2', 'Copy 3'];

  filteredData = [
    // Example data
    { agreement: 'Agreement 1', legalFee: 'Fee 1', stampDuty: 'Duty 1', certifiedCopy: 'Copy 1', status: 'Pending' },
    { agreement: 'Agreement 2', legalFee: 'Fee 2', stampDuty: 'Duty 2', certifiedCopy: 'Copy 2', status: 'Completed' }
  ];

  submitFilters() {
    // Filter logic to display relevant data in the table
    console.log('Filters applied:', this.filters);
  }

  downloadReport() {
    // Logic for downloading the report
    console.log('Download button clicked');
  }
}
