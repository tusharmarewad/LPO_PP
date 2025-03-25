import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-add-lead',
  templateUrl: './cm-add-lead.component.html',
  styleUrls: ['./cm-add-lead.component.css']
})
export class CMAddLeadComponent {
  leadForm: FormGroup;
  userId: number | null = null;
  leads: any[] = [];


  constructor(private fb: FormBuilder, private leadService: ApicallService) {
    this.leadForm = this.fb.group({
      builder_name: ['', Validators.required],
      project_name: ['', Validators.required],
      contact_person: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address_1: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      no_of_units: ['', [Validators.required, Validators.min(1)]],
      project_completion_status: ['', Validators.required],
      status: ['', Validators.required],
      created_by:[null]
    });
  }

  ngOnInit(): void {
    // Fetch userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
      this.leadForm.patchValue({ created_by: this.userId });
    }

    this.fetchLeads();
  }

  fetchLeads(): void {
    this.leadService.bdmgetLeads().subscribe(
      (response) => {
        if (response.success) {
          this.leads = response.data;
        }
      },
      (error) => {
        console.error("Error fetching leads:", error);
      }
    );
  }

  // updateStatus(lead: any): void {
  //   this.leadService.bdmupdateLeadStatus(lead.lead_id, lead.status).subscribe(
  //     (response) => {
  //       Swal.fire('Success', 'Status updated successfully!', 'success');
  //     },
  //     (error) => {
  //       Swal.fire('Error', 'Failed to update status.', 'error');
  //     }
  //   );
  // }

  onSubmit(): void {
    if (this.leadForm.invalid) {
      Swal.fire('Error', 'Please fill all required fields correctly.', 'error');
      return;
    }

    this.leadService.bdmaddLead(this.leadForm.value).subscribe(
      (response) => {
        Swal.fire('Success', 'Lead added successfully!', 'success');
        this.leadForm.reset();
      },
      (error) => {
        Swal.fire('Error', 'Failed to add lead. Try again.', 'error');
      }
    );
  }
}


