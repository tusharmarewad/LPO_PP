import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bdm-ad-hoc',
  templateUrl: './bdm-ad-hoc.component.html',
  styleUrls: ['./bdm-ad-hoc.component.css']
})
export class BdmAdHocComponent implements OnInit{
  draftForm: FormGroup;
  submitted = false;
  responseMessage = '';
  userId: number | null = null;

  constructor(private fb: FormBuilder, private draftService: ApicallService) {
    this.draftForm = this.fb.group({
      clientName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      agreementType: ['', Validators.required],
      otherSpecs: [''],
      remark: [''],
      draft_type: ['', Validators.required],
      tat: ['', Validators.required],
      created_by: [null] // This can be dynamic based on logged-in user
    });
  }

  ngOnInit(): void {
    // Fetch userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
      this.draftForm.patchValue({ created_by: this.userId });
    }
  }

  submitForm() {
    if (this.draftForm.valid) {
      this.draftService.bdm_Draft_Req_AdHoc(this.draftForm.value).subscribe(
        (response) => {
          // this.responseMessage = `Request submitted successfully!`;
          Swal.fire('Success', 'Request submitted successfully!', 'success');
          
          this.submitted = true;

          setTimeout(()=>{
            this.submitted = false;
          },5000);
          this.draftForm.reset();
        },
        (error) => {
           Swal.fire('Error', 'Error submitting request. Please try again.', 'error');
          // this.responseMessage = 'Error submitting request. Please try again.';
        }
      );
    }
  }
}
