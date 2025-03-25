

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-add-project',
  templateUrl: './cm-add-project.component.html',
  styleUrls: ['./cm-add-project.component.css']
})
export class CMAddProjectComponent implements OnInit{

  builderForm!: FormGroup;
  submitted = false;
  projects: any[] = [];
  selectedProjectId: string | null = null; // ✅ Store selected project ID
  userId: number | null = null;

  constructor(private fb: FormBuilder, private builderService: ApicallService) {}
  // In your component.ts
percentages: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  ngOnInit(): void {
    this.builderForm = this.fb.group({
      builderName: ['', Validators.required],
      projectName: ['', Validators.required],
      location: ['', Validators.required],
      panCardNumber: ['', Validators.required],
      totalUnits: ['', Validators.required],
      unitsForAgreements: ['', Validators.required],
      projectCompletionStatus: ['', Validators.required],
      contractSignedDate: ['', Validators.required],
      contractNumber: ['', Validators.required],
      contactPersonName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      created_by:[null]
    });
     // Fetch userId from localStorage
     const storedUserId = localStorage.getItem('userId');
     if (storedUserId) {
       this.userId = parseInt(storedUserId, 10);
       this.builderForm.patchValue({ created_by: this.userId });
     }
    this.fetchProjects();
  }
  // ✅ Fetch all projects for dropdown selection
  fetchProjects(): void {
    this.builderService.getallproject().subscribe(
      (response) => {
        if (response.success) {
          this.projects = response.data;
        }
      },
      (error) => {
        console.error("Error fetching projects:", error);
      }
    );
  }
  
  onProjectSelect(event: any): void {
    const projectId = event.target.value;
    console.log("🔹 Selected Project ID:", projectId);
    this.selectedProjectId = projectId;
  
    const selectedProject = this.projects.find(p => p.project_id === projectId);
    if (selectedProject) {
      // Explicitly map each property to the corresponding form control
      this.builderForm.patchValue({
        location: selectedProject.location,
        builderName: selectedProject.builder_name,
        projectName: selectedProject.project_name,
        contactEmail: selectedProject.contact_email  // ✅ Set the email value here
      });
    } else {
      console.error("❌ Project not found for ID:", projectId);
    }
  }
  
  onSubmit(): void {
    this.submitted = true; 
    if (this.builderForm.invalid) {
      Swal.fire('Error', 'Please fill all required fields', 'error');
      return;
    } 
    if (this.selectedProjectId) {
      console.log("🔹 Sending Update for Project ID:", this.selectedProjectId); // ✅ Debugging
      const payload = {
        builder_name: this.builderForm.value.builderName,
        project_name: this.builderForm.value.projectName,
        location: this.builderForm.value.location,
        pan_card_number: this.builderForm.value.panCardNumber,
        total_units: this.builderForm.value.totalUnits,
        units_for_agreements: this.builderForm.value.unitsForAgreements,
        project_completion_status: this.builderForm.value.projectCompletionStatus,
        contract_signed_date: this.builderForm.value.contractSignedDate,
        contract_number: this.builderForm.value.contractNumber,
        contact_person_name: this.builderForm.value.contactPersonName,
        contact_email: this.builderForm.value.contactEmail,
        contact_phone: this.builderForm.value.contactPhone,
        created_by: this.userId,
        submitted_by_cm: 1 
      };
      this.builderService.addproject(this.selectedProjectId, payload).subscribe(
        (response) => {
          Swal.fire('Success', 'Project updated successfully!', 'success');
          this.builderForm.reset();
          this.submitted = false;
          this.fetchProjects(); // Refresh dropdown list
        },
        (error) => {
          console.error("❌ Error updating project:", error);
          Swal.fire('Error', 'Failed to update project. Try again later.', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Please select a Project ID', 'error');
    }
  }
}

