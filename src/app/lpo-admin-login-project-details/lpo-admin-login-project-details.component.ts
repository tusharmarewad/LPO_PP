
import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-lpo-admin-login-project-details',
  templateUrl: './lpo-admin-login-project-details.component.html',
  styleUrls: ['./lpo-admin-login-project-details.component.css']
})
export class LpoAdminLoginProjectDetailsComponent implements OnInit{
// Dropdown options for Data Type filtering
draftTypeOptions = ['Login Data', 'Project Data', 'Modifications'];
tableData: any[] = [];
// Selected filter value
selectedDraftType: string = '';
remark: string = '';
  status: string = '';

constructor(private fb: FormBuilder, private projectService: ApicallService){}

// Original table data
// tableData = [
//   {
//     ARN: '123',
//     clientId: '001',
//     clientName: 'Project Alpha',
//     draftType: 'Login Data',
//     TAT: 'Mumbai',
//     createdBy: 'John Doe',
//     draftedBy: 'BDM A',
//     lastUpdate: 'View'
//   },
//   {
//     ARN: '124',
//     clientId: '002',
//     clientName: 'Project Beta',
//     draftType: 'Project Data',
//     TAT: 'Delhi',
//     createdBy: 'Jane Smith',
//     draftedBy: 'BDM B',
//     lastUpdate: 'View'
//   }
// ];

// Filtered table data
filteredTableData = [...this.tableData];

// Index of the currently expanded row
expandedRowIndex: number | null = null;

ngOnInit(): void {
  this.fetchLeads();
}

fetchLeads(): void {
  this.projectService.fetchAllProjectDetailsRecords().subscribe(
    (response) => {
     
        this.filteredTableData = response;
        console.log(this.filteredTableData);
        
    
    },
    (error) => console.error("Error fetching leads:", error)
  );
}


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
  const selectedProject = this.filteredTableData[this.expandedRowIndex!];
  const project_id = selectedProject.project_id;

  if (!this.status) {
    Swal.fire('Error', 'Please select a status', 'error');
    return;
  }

  const data = {
    project_id: project_id,
    remark: this.remark,
    status: this.status
  };

  this.projectService.updateProjectStatusByAdmin(data).subscribe(
    (response) => {
      Swal.fire('Success', response.message, 'success');
      // Update local data after successful update
      selectedProject.admin_status = this.status;
      selectedProject.remark = this.remark;
      this.remark = '';
      this.status = '';
    },
    (error) => {
      Swal.fire('Error', error.message || 'Something went wrong', 'error');
    }
  );
}

downloadProjectExcel(projectId: string): void {
  console.log("Downloading Excel for Project ID:", projectId);
  
  this.projectService.downloadProjectExcel(projectId).subscribe(
    (response: Blob) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `project_${projectId}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
    }
  );
}




}
