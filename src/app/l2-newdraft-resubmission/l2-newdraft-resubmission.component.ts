
import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-l2-newdraft-resubmission',
  templateUrl: './l2-newdraft-resubmission.component.html',
  styleUrls: ['./l2-newdraft-resubmission.component.css']
})
export class L2NewdraftResubmissionComponent {

  userId: number = 0;
  agreements: any[] = [];
  drafts: any[] = [];
  selectedDraft: any = {};
  selectedAgreement: any = {}; // Store selected row data
  updateRemark: string = ''; // To store user-entered remark
  selectedStatus: string = ''; // To store selected status
  selectedTab: string = 'draft'; // Default to 'draft'
  
  constructor(private leadService: ApicallService) {}

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
    }
    this.fetchLeads();
  }
  
  fetchLeads(): void {
    this.leadService.fetchRedoAddHocs(this.userId).subscribe(
      (response) => {
        this.drafts = response;
      },
      (error) => {
        console.error("Error fetching drafts:", error);
      }
    );

    this.leadService.fetchProjectAgreementsRedo(this.userId).subscribe(
      (response) => {
        this.agreements = response;
      },
      (error) => {
        console.error("Error fetching agreements:", error);
      }
    );
  }

 

  // Function to populate input fields when clicking "View"
  populateForm(draft: any): void {
    this.selectedDraft = { ...draft };
    this.updateRemark = ''; // Reset remark input
    this.selectedStatus = ''; // Reset status input
  }

  populateForm2(selectedItem: any): void {
    this.selectedAgreement = { ...selectedItem }; // Store the clicked row data
    this.updateRemark = ''; // Reset remark input field
    this.selectedStatus = ''; // Reset status dropdown
  }

  // Function to submit update (only updating Status and Remark)
  submitUpdate(): void {
    if (!this.selectedDraft.id) {
      Swal.fire("Error", "No agreement selected!", "error");
      return;
    }

    if (!this.selectedStatus || !this.updateRemark) {
      Swal.fire("Error", "Please fill both fields before submitting!", "error");
      return;
    }

    this.leadService.updateAddHocStatusByJrLawyer(
      this.selectedDraft.id, 
      this.selectedStatus, 
      this.updateRemark
    ).subscribe(
      (response: any) => {
        Swal.fire("Success", response.message, "success");
        this.fetchLeads(); // Refresh table after update
      },
      (error) => {
        Swal.fire("Error", "Failed to update agreement", "error");
        console.error(error);
      }
    );
  }


   // Function to submit update (only updating Status and Remark)
    submit(): void {
      if (!this.selectedAgreement.id) {
        Swal.fire("Error", "No agreement selected!", "error");
        return;
      }
  
      if (!this.selectedStatus || !this.updateRemark) {
        Swal.fire("Error", "Please fill both fields before submitting!", "error");
        return;
      }
  
      this.leadService.updateProjectAgreementsByJrLawyer(
        this.selectedAgreement.id, 
        this.selectedStatus, 
        this.updateRemark
      ).subscribe(
        (response: any) => {
          Swal.fire("Success", response.message, "success");
          this.fetchLeads(); // Refresh table after update
        },
        (error) => {
          Swal.fire("Error", "Failed to update agreement", "error");
          console.error(error);
        }
      );
    }
}
