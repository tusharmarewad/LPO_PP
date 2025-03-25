import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-cm-dashboard',
  templateUrl: './cm-dashboard.component.html',
  styleUrls: ['./cm-dashboard.component.css']
})
export class CMDashboardComponent implements OnInit{
  // leadForm: FormGroup;
  userId: number  = 0;
  agreements: any[] = [];
  addhocs: any[] = [];
  leads: any[] = [];
  projects: any[] = [];
  constructor( private leadService: ApicallService){}

  ngOnInit(): void {
    // Fetch userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
      // this.leadForm.patchValue({ created_by: this.userId });
    }

     this.fetchLeads();
     this.fetchagreements();
     this.fetchAddHoc();
     this.fetchProject();
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

  fetchagreements(): void {
    this.leadService.getAllAgreements().subscribe(
      (response) => {
        if (response.success) {
          this.agreements = response.data;
        }
      },
      (error) => {
        console.error("Error fetching leads:", error);
      }
    );
  }

  fetchAddHoc(): void{
    this.leadService.getBdmDraftRequests().subscribe(
      (response) => {
        if (response.success) {
          this.addhocs = response.data;
        }
      },
      (error) => {
        console.error("Error fetching leads:", error);
      }
    );
  }

  fetchProject(): void{
    this.leadService.getallproject().subscribe(
      (response) => {
        if (response.success) {
         this.projects = response.data;         
        }
      },
      (error) => {
        console.error('Error fetching meeting:', error);
      }
    );
  }
}
