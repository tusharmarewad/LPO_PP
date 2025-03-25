import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-draft-new-agreement',
  templateUrl: './cm-draft-new-agreement.component.html',
  styleUrls: ['./cm-draft-new-agreement.component.css']
})
export class CMDraftNewAgreementComponent implements OnInit{
  projectId: any[] = [];
  newAgreementForm!: FormGroup;
  userId: number | null = null;

  constructor(private fb: FormBuilder, private reqDraftService: ApicallService) {}

ngOnInit(): void {
  this.newAgreementForm = this.fb.group({
    project_id: ['', Validators.required],
    project_name: ['', Validators.required],
    location: ['', Validators.required],
    project_full_name: ['', Validators.required],
    phase: ['', Validators.required],
    building: ['', Validators.required],
    unit_type: ['', Validators.required],
    authority_approval: ['', Validators.required],
    tat: ['', Validators.required],
    agreement_type: ['', Validators.required],
    created_by:[null]
  });

  // Fetch userId from localStorage
  const storedUserId = localStorage.getItem('userId');
  if (storedUserId) {
    this.userId = parseInt(storedUserId, 10);
    this.newAgreementForm.patchValue({ created_by: this.userId });
  }

  this.fetchProjectId();
}

fetchProjectId(): void {
  this.reqDraftService.getProjectIdSubmitedByClientManager().subscribe(
    (response) => {
      if (response.success) {
        this.projectId = response.projects;
        console.log(this.projectId);  
      }
    },
    (error) => {
      console.error("Error fetching leads:", error);
    }
  );
}

onSubmit(): void {
  if (this.newAgreementForm.valid) {
    // console.log("ttttttttttttttt",this.newAgreementForm.value); 
    this.reqDraftService.submitAgreement(this.newAgreementForm.value).subscribe(
      (response) => {
        if (response.success) {
          console.log('Agreement submitted successfully');
          Swal.fire('Success', 'Agreement submitted successfully!', 'success');
        }
      },
      (error) => {
        console.error('Error submitting agreement:', error);
        Swal.fire('Error', 'Error submitting agreement.', 'error');
      }
    );
  }
}



}
