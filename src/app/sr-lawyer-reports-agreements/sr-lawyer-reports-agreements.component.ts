import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-sr-lawyer-reports-agreements',
  templateUrl: './sr-lawyer-reports-agreements.component.html',
  styleUrls: ['./sr-lawyer-reports-agreements.component.css']
})
export class SrLawyerReportsAgreementsComponent implements OnInit {
  agreements: any[] = [];
  filteredAgreements: any[] = [];

  phaseList: string[] = [];
  projectList: string[] = [];
  createdByList: string[] = [];
  agreementTypes: string[] = [];

  selectedPhase: string = ''; 
  selectedProject: string = ''; 
  selectedCreatedBy: string = '';
  selectedAgreementType: string = '';

  phaseCount: number = 0; 
  projectCount: number = 0;
  createdByCount: number = 0;
  agreementTypeCount: number = 0;
  totalFilteredCount: number = 0; 

  constructor(private agreementService: ApicallService) {}

  ngOnInit(): void {
    this.fetchAgreements();
  }

  fetchAgreements(): void {
    this.agreementService.getAllAgreements().subscribe(
      (response) => {
        if (response.success) {
          this.agreements = response.data;
          this.filteredAgreements = [...this.agreements];

          // Extract unique values for dropdowns
          this.phaseList = Array.from(new Set(this.agreements.map(agreement => agreement.phase))).filter(Boolean);
          this.projectList = Array.from(new Set(this.agreements.map(agreement => agreement.project_name))).filter(Boolean);
          this.createdByList = Array.from(new Set(this.agreements.map(agreement => agreement.created_by_name))).filter(Boolean);
          this.agreementTypes = Array.from(new Set(this.agreements.map(agreement => agreement.agreement_type))).filter(Boolean);

          this.totalFilteredCount = this.filteredAgreements.length;
        }
      },
      (error) => {
        console.error("Error fetching agreements:", error);
      }
    );
  }

  filterAgreements(): void {
    // Apply filters to display the table data
    this.filteredAgreements = this.agreements.filter(agreement => {
      return (
        (this.selectedPhase ? agreement.phase === this.selectedPhase : true) &&
        (this.selectedProject ? agreement.project_name === this.selectedProject : true) &&
        (this.selectedCreatedBy ? agreement.created_by_name === this.selectedCreatedBy : true) &&
        (this.selectedAgreementType ? agreement.agreement_type === this.selectedAgreementType : true)
      );
    });
  
    // **Independent Count Calculation for Each Filter**
    this.phaseCount = this.selectedPhase 
      ? this.agreements.filter(agreement => agreement.phase === this.selectedPhase).length 
      : 0;
  
    this.projectCount = this.selectedProject 
      ? this.agreements.filter(agreement => agreement.project_name === this.selectedProject).length 
      : 0;
  
    this.createdByCount = this.selectedCreatedBy 
      ? this.agreements.filter(agreement => agreement.created_by_name === this.selectedCreatedBy).length 
      : 0;
  
    this.agreementTypeCount = this.selectedAgreementType 
      ? this.agreements.filter(agreement => agreement.agreement_type === this.selectedAgreementType).length 
      : 0;
  
    // **Keep total agreements count unchanged**
    this.totalFilteredCount = this.filteredAgreements.length;
  }
  
  // Calculate ALL projects count
getAllAgreementCount(): number {
  return this.agreements.length;  // Returns total number of projects
}
}
