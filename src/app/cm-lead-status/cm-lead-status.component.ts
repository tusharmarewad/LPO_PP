import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-lead-status',
  templateUrl: './cm-lead-status.component.html',
  styleUrls: ['./cm-lead-status.component.css']
})
export class CMLeadStatusComponent implements OnInit {
  leadForm: FormGroup;
  userId: number | null = null;
  leads: any[] = [];
  selectedLead: any = null;

  constructor(private fb: FormBuilder, private leadService: ApicallService) {
    this.leadForm = this.fb.group({
      lead_id: [''],
      project_name: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
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
      (error) => console.error("Error fetching leads:", error)
    );
  }

  onView(lead: any): void {
    this.selectedLead = lead;
    this.leadForm.patchValue({
      lead_id: lead.lead_id,
      project_name: lead.project_name,
      location: lead.location,
      status: lead.status
    });
  }

  onSubmit(): void {
    const formValues = this.leadForm.value;
    console.log('Submitting lead_id:', formValues.lead_id);  // Debugging log
    if (formValues.status) {
      this.leadService.bdmupdateLeadStatus(formValues.lead_id, formValues.status).subscribe(
        (response) => {
          if (response.success) {
            Swal.fire('Success', 'Status updated successfully!', 'success');
            this.fetchLeads();
          } else {
            Swal.fire('Error', response.message, 'error');
          }
        },
        (error) => Swal.fire('Error', 'An error occurred while updating status.', 'error')
      );
    }
  }
  
}