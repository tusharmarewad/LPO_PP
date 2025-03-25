import { Component,OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-sr-lawyer-dashboard',
  templateUrl: './sr-lawyer-dashboard.component.html',
  styleUrls: ['./sr-lawyer-dashboard.component.css']
})
export class SrLawyerDashboardComponent implements OnInit{

  // leadForm: FormGroup;
  userId: number  = 0;
  agreements: any[] = [];
  addhocs: any[] = [];

  constructor( private leadService: ApicallService){}

  ngOnInit(): void {
    // Fetch userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
      // this.leadForm.patchValue({ created_by: this.userId });
    }

     this.fetchagreements();
     this.fetchAddHoc();
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


}
