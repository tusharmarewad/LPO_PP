import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cm-report-agreement',
  templateUrl: './cm-report-agreement.component.html',
  styleUrls: ['./cm-report-agreement.component.css']
})
export class CMReportAgreementComponent implements OnInit{
  agreements: any[] = [];

  constructor(private fb: FormBuilder, private agreement: ApicallService) {}
ngOnInit(): void {
  
  this.fetchAgreement();
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


}
