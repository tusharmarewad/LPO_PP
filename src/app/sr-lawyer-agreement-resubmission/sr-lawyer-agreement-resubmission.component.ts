import { Component } from '@angular/core';

@Component({
  selector: 'app-sr-lawyer-agreement-resubmission',
  templateUrl: './sr-lawyer-agreement-resubmission.component.html',
  styleUrls: ['./sr-lawyer-agreement-resubmission.component.css']
})
export class SrLawyerAgreementResubmissionComponent {
 // Dropdown options for Draft Type filtering
 draftTypeOptions = ['MOU', 'Franchises', 'Affidavit', 'Employee Agreement', 'Other'];

 // Selected filter value
 selectedDraftType: string = '';

 // Original table data
 tableData = [
   {
     clientId: '123',
     clientName: 'Kiran C',
     projectName: 'Project A',
     unit: 'Unit 1',
     agreementValue: '10,00,000',
     stampdutyGRN: 'GRN1234',
     lawyer2: 'Lawyer B',
     resubmissionReason: 'Pending Document',
     updateStatus: 'Pending',
     dateOfResubmission: '',
     remark: 'Please update details'
   },
   {
     clientId: '124',
     clientName: 'Rahul S',
     projectName: 'Project B',
     unit: 'Unit 2',
     agreementValue: '12,00,000',
     stampdutyGRN: 'GRN5678',
     lawyer2: 'Lawyer A',
     resubmissionReason: 'Incorrect Document',
     updateStatus: 'Completed',
     dateOfResubmission: '',
     remark: 'Updated successfully'
   }
 ];

 // Filtered table data
 filteredTableData = [...this.tableData];

 // Index of the currently expanded row
 expandedRowIndex: number | null = null;

 // Filter table data by Draft Type
 filterByDraftType(): void {
   if (this.selectedDraftType) {
     this.filteredTableData = this.tableData.filter(row => row.updateStatus === this.selectedDraftType);
   } else {
     this.filteredTableData = [...this.tableData];
   }
 }

 // Toggle the visibility of the expanded section
 toggleDetails(index: number, event: Event): void {
   event.preventDefault(); // Prevent default link behavior
   this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
 }
}
