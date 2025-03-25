import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-sr-lawyer-reports-team',
  templateUrl: './sr-lawyer-reports-team.component.html',
  styleUrls: ['./sr-lawyer-reports-team.component.css']
})
export class SrLawyerReportsTeamComponent implements OnInit {
  projects: any[] = [];
  bdmList: { id: string, name: string }[] = []; 
  clientManagerList: { id: string, name: string }[] = []; 

  selectedBDMId: string = ''; 
  selectedClientManagerId: string = ''; 
  selectedBDMName: string = ''; 
  selectedClientManagerName: string = ''; 

  uniqueProjectNames: string[] = []; // Stores unique project names
  selectedProjectName: string = ''; // Selected project name
  selectedProjectCount: number = 0; // Count of selected project

  bdmProjectCount: number = 0; 
  clientManagerProjectCount: number = 0; 

  constructor(private projectService: ApicallService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectService.getallproject().subscribe(
      (response) => {
        if (response.success) {
          this.projects = response.data;
          
          // Extract unique BDMs
          const uniqueBDMs = new Map();
          this.projects
            .filter(project => project.created_by_name === 'BDM')
            .forEach(project => {
              uniqueBDMs.set(project.created_by, project.created_by_name);
            });
          this.bdmList = Array.from(uniqueBDMs, ([id, name]) => ({ id, name }));
          this.bdmList.sort((a, b) => a.name.localeCompare(b.name));

          // Extract unique Client Managers
          const uniqueClientManagers = new Map();
          this.projects
            .filter(project => project.created_by_name === 'Client Manager')
            .forEach(project => {
              uniqueClientManagers.set(project.created_by, project.created_by_name);
            });
          this.clientManagerList = Array.from(uniqueClientManagers, ([id, name]) => ({ id, name }));
          this.clientManagerList.sort((a, b) => a.name.localeCompare(b.name));

          console.log('BDM List:', this.bdmList);
          console.log('Client Manager List:', this.clientManagerList);

           // Extract Unique Project Names
           const projectNamesSet = new Set(this.projects.map(project => project.project_name));
           this.uniqueProjectNames = Array.from(projectNamesSet).sort(); // Convert Set to Array and Sort
 
           console.log('Unique Project Names:', this.uniqueProjectNames);
        }
      },
      (error) => {
        console.error("Error fetching projects:", error);
      }
    );
  }

  onBDMSelect(event: any): void {
    this.selectedBDMId = event.target.value;
    const selectedBDM = this.bdmList.find(bdm => bdm.id === this.selectedBDMId);
    this.selectedBDMName = selectedBDM ? selectedBDM.name : '';

    // Count projects created by selected BDM
    this.bdmProjectCount = this.projects.filter(
      project => project.created_by === this.selectedBDMId
    ).length;
  }

  // onClientManagerSelect(event: any): void {
  //   this.selectedClientManagerId = event.target.value;
  //   const selectedClientManager = this.clientManagerList.find(cm => cm.id === this.selectedClientManagerId);
  //   this.selectedClientManagerName = selectedClientManager ? selectedClientManager.name : '';

  //   // Count projects created by selected Client Manager
  //   this.clientManagerProjectCount = this.projects.filter(
  //     project => project.created_by === this.selectedClientManagerId
  //   ).length;
  // }
  
  onProjectSelect(event: any): void {
    this.selectedProjectName = event.target.value;

    // Count occurrences of the selected project name
    this.selectedProjectCount = this.projects.filter(
      project => project.project_name === this.selectedProjectName
    ).length;

    console.log(`Selected Project: ${this.selectedProjectName}, Count: ${this.selectedProjectCount}`);
  }


// Calculate ALL projects count
getAllProjectsCount(): number {
  return this.projects.length;  // Returns total number of projects
}
}
