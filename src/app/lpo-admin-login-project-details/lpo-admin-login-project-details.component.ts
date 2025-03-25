import { Component } from '@angular/core';

@Component({
  selector: 'app-lpo-admin-login-project-details',
  templateUrl: './lpo-admin-login-project-details.component.html',
  styleUrls: ['./lpo-admin-login-project-details.component.css']
})
export class LpoAdminLoginProjectDetailsComponent {
// Dropdown options for Data Type filtering
draftTypeOptions = ['Login Data', 'Project Data', 'Modifications'];

// Selected filter value
selectedDraftType: string = '';

// Original table data
tableData = [
  {
    ARN: '123',
    clientId: '001',
    clientName: 'Project Alpha',
    draftType: 'Login Data',
    TAT: 'Mumbai',
    createdBy: 'John Doe',
    draftedBy: 'BDM A',
    lastUpdate: 'View'
  },
  {
    ARN: '124',
    clientId: '002',
    clientName: 'Project Beta',
    draftType: 'Project Data',
    TAT: 'Delhi',
    createdBy: 'Jane Smith',
    draftedBy: 'BDM B',
    lastUpdate: 'View'
  }
];

// Filtered table data
filteredTableData = [...this.tableData];

// Index of the currently expanded row
expandedRowIndex: number | null = null;

// Filter table data by Data Type
filterByDraftType(): void {
  if (this.selectedDraftType) {
    this.filteredTableData = this.tableData.filter(row => row.draftType === this.selectedDraftType);
  } else {
    this.filteredTableData = [...this.tableData];
  }
}

// Toggle the visibility of the expanded section
toggleDetails(index: number, event: Event): void {
  event.preventDefault(); // Prevent default link behavior
  this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
}
// Submit functionality
onSubmit(): void {
 if (this.expandedRowIndex !== null) {
   const updatedRow = this.filteredTableData[this.expandedRowIndex];
   console.log('Updated Row:', updatedRow);
   alert('Data submitted successfully!');
 } else {
   alert('No row is selected for submission.');
 }
}
}
