import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bdm-dashboard',
  templateUrl: './bdm-dashboard.component.html',
  styleUrls: ['./bdm-dashboard.component.css']
})
export class BDMDashboardComponent {
  leads: any[] = [];
  schedule: any[] = [];
  projects: any[] = [];
  // leadForm: FormGroup;
    userId: number = 0;
  
    constructor(private leadService: ApicallService) {
    }
  
    ngOnInit(): void {
      // Fetch userId from localStorage
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        this.userId = parseInt(storedUserId, 10);
        // this.leadForm.patchValue({ created_by: this.userId });
      }
  
      this.fetchLeads();
      if (this.userId) {
        this.fetchMeetingDetails();
        this.fetchProject();
      }
    }
  
  
    fetchLeads(): void {
      this.leadService.bdmgetLeadsCreatedBy(this.userId).subscribe(
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

    fetchMeetingDetails(): void {
      this.leadService.getSchedulesByCreatedBy(this.userId).subscribe(
        (response) => {
          if (response.success) {
           this.schedule = response.data;
           console.log(this.schedule);
           
          }
        },
        (error) => {
          console.error('Error fetching meeting:', error);
        }
      );
    }

    fetchProject(): void{
      this.leadService.getProjectsByCreatedBy(this.userId).subscribe(
        (response) => {
          if (response.success) {
           this.projects = response.data;
           console.log(this.schedule);
           
          }
        },
        (error) => {
          console.error('Error fetching meeting:', error);
        }
      );
    }
}


