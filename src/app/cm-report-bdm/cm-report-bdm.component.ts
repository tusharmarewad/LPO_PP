import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-report-bdm',
  templateUrl: './cm-report-bdm.component.html',
  styleUrls: ['./cm-report-bdm.component.css']
})
export class CMReportBdmComponent implements OnInit{
  leads: any[] = [];

  constructor(private fb: FormBuilder, private leadService: ApicallService) {
  }
ngOnInit(): void {
  this.fetchLeads();
}

  fetchLeads(): void {
    this.leadService.bdmgetLeads().subscribe(
      (response) => {
        if (response.success) {
          this.leads = response.data;
          console.log(this.leads);
          
        }
      },
      (error) => {
        console.error("Error fetching leads:", error);
      }
    );
  }
}
