import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sr-lawyer-agreements-new-agreements',
  templateUrl: './sr-lawyer-agreements-new-agreements.component.html',
  styleUrls: ['./sr-lawyer-agreements-new-agreements.component.css']
})
export class SrLawyerAgreementsNewAgreementsComponent {
agreements: any[] = [];
selectedAgreement: any;
jrLawyerData: any[] = [];
userId: number  = 0;
  
  constructor(private fb: FormBuilder, private agreement: ApicallService) {}

ngOnInit(): void {
  // Fetch userId from localStorage
const storedUserId = localStorage.getItem('userId');
if (storedUserId) {
  this.userId = parseInt(storedUserId, 10);
  // this.leadForm.patchValue({ created_by: this.userId });

 
}

this.fetchAgreement();
this.fetchJrLawyerName();

}


fetchAgreement(): void {
  this.agreement.getAllAgreements().subscribe(
    (response) => {
      if (response.success) {
        this.agreements = response.data;
        console.log(this.agreements);
        
      }
    },
    (error) => {
      console.error("Error fetching leads:", error);
    }
  );
}

fetchJrLawyerName(): void{
  this.agreement.fetchJrLawyerName().subscribe(
    (response) => {
    
        this.jrLawyerData = response;
        // console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj",this.jrLawyerData);
        
      
    },
    (error) => {
      console.error("Error fetching leads:", error);
    }
  );
}

// onViewClick(agreement: any) {
//   this.selectedAgreement = { ...agreement }; // copy the selected agreement into selectedAgreement
// }

// ✅ Select Row for Editing
selectRow(agreement: any, event: Event): void {
  event.preventDefault();
  this.selectedAgreement = { ...agreement }; // Clone the selected row
  // console.log( this.selectedAgreement);
  
}

// Method to handle the submit button click
onSubmit(): void {
  if (this.selectedAgreement) {
    const updatedAgreement = {
      project_name: this.selectedAgreement.project_name,
      phase: this.selectedAgreement.phase,
      unit_type: this.selectedAgreement.unit_type,
      remark: this.selectedAgreement.remark,
      drafted_by: this.selectedAgreement.drafted_by,
      status:this.selectedAgreement.status,
      assigned_by: this.userId // Send assigned_by
    };

    // Ensure the project_id is passed as part of the URL
    this.agreement.updateAgreement(this.selectedAgreement.project_id, updatedAgreement).subscribe(
      (response) => {
        Swal.fire('Success', 'Agreement updated successfully!', 'success');
        this.fetchAgreement(); // Refresh data
          this.selectedAgreement = null; // Reset selection
      },
      (error) => {
        console.error('Error updating agreement:', error);
        Swal.fire('Error', 'Error updating agreement.', 'error');
      }
    );
  }
}


}
