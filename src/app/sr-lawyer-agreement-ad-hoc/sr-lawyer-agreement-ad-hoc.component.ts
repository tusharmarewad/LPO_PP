import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sr-lawyer-agreement-ad-hoc',
  templateUrl: './sr-lawyer-agreement-ad-hoc.component.html',
  styleUrls: ['./sr-lawyer-agreement-ad-hoc.component.css']
})
export class SrLawyerAgreementAdHocComponent implements OnInit {
  // Dropdown options for Draft Type filtering
  // draftTypeOptions = ['MOU', 'Franchises', 'Affidavit', 'Employee Agreement', 'Other'];
//client_name, created_by, tat, draft_type, assigned_to, status, remark 
  // Table data
  bdmDrafts: any[] = [];
  filteredTableData: any[] = [];
  selectedDraftType: string = '';
  jrLawyerData:any[] = [];
  userId: number  = 0;

  
  // Selected row for form
  selectedRow: any = null;

  constructor(private AdHocService: ApicallService) {}

  ngOnInit(): void {
// Fetch userId from localStorage
const storedUserId = localStorage.getItem('userId');
if (storedUserId) {
  this.userId = parseInt(storedUserId, 10);
  // this.leadForm.patchValue({ created_by: this.userId });
  
}

    this.fetchAdHoc();
    this.fetchJrLawyerName();
  }

 

  fetchJrLawyerName(): void{
    this.AdHocService.fetchJrLawyerName().subscribe(
      (response) => {
      
          this.jrLawyerData = response;
          // console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj",this.jrLawyerData);
          
        
      },
      (error) => {
        console.error("Error fetching leads:", error);
      }
    );
  }
  
  // ✅ Fetch Data from API
  fetchAdHoc(): void {
    this.AdHocService.getBdmDraftRequests().subscribe(
      (response) => {
        if (response.success) {
          this.bdmDrafts = response.data;
          this.filteredTableData = [...this.bdmDrafts]; // Initialize filtered data
          console.log("bdmdata",this.bdmDrafts);
          
        }
      },
      (error) => {
        console.error('Error fetching draft requests:', error);
      }
    );
  }

  // ✅ Filter by Draft Type
  filterByDraftType(): void {
    if (this.selectedDraftType) {
      this.filteredTableData = this.bdmDrafts.filter(row => row.draft_type === this.selectedDraftType);
    } else {
      this.filteredTableData = [...this.bdmDrafts];
    }
  }

  // ✅ Select Row for Editing
  selectRow(row: any, event: Event): void {
    event.preventDefault();
    this.selectedRow = { ...row }; // Clone the selected row
  }

  // ✅ Modify Data & Update in Database
modifyData(): void {
  if (!this.selectedRow) return;

  const updatedData = {
    client_name: this.selectedRow.client_name,
    draft_type: this.selectedRow.draft_type,
    tat: this.selectedRow.tat,
    assigned_to: this.selectedRow.assigned_to,
    status: this.selectedRow.status,  // Ensure status is included
    remark: this.selectedRow.remark,
    assigned_by: this.userId // Pass the current user ID
  };

  console.log('Payload being sent:', updatedData); // Debugging log

  this.AdHocService.updateBdmDraftRequest(this.selectedRow.id, updatedData).subscribe(
    (response) => {
      if (response.success) {
        Swal.fire('Success', 'Draft updated successfully!', 'success');
        this.fetchAdHoc(); // Refresh data
        this.selectedRow = null; // Reset selection
      }
    },
    (error) => {
      console.error('Error updating draft:', error);
      Swal.fire('Error', 'Failed to update draft!', 'error');
    }
  );
}

}
