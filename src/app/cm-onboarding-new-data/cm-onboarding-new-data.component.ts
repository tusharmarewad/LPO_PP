import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-cm-onboarding-new-data',
  templateUrl: './cm-onboarding-new-data.component.html',
  styleUrls: ['./cm-onboarding-new-data.component.css']
})
export class CMOnboardingNewDataComponent implements OnInit {
  activeTab: string = 'Project_Details';
  projects: any[] = [];
  selectedProjectId: string = '';
  selectedProject: any;
  project_id: string = '';
  projectName: string = '';
  numberOfPhases: number = 1;
  phases: any[] = [];

  constructor(private projectService: ApicallService) {}

  ngOnInit(): void {
    this.initializePhases();
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectService.getallproject().subscribe(
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

  

  onProjectSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const projectId = selectElement.value;
    this.selectedProject = this.projects.find((project: any) => project.project_id === projectId);
    this.selectedProjectId = this.selectedProject.project_id;
    // console.log("selecteddddddddddddd",this.selectedProjectId);
    
}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  initializePhases(): void {
    this.phases = [];
    for (let i = 0; i < this.numberOfPhases; i++) {
      this.phases.push({
        phase_number: '',
        numberOfBuildings: 1,
        buildings: [
          {
            building_name: '',
            csvFile: null
          }
        ]
      });
    }
  }

  onPhasesChange(): void {
    this.initializePhases();
  }

  onBuildingsChange(phaseIndex: number): void {
    const phase = this.phases[phaseIndex];
    phase.buildings = [];
    for (let i = 0; i < phase.numberOfBuildings; i++) {
      phase.buildings.push({
        building_name: '',
        csvFile: null
      });
    }
  }

  goAhead(): void {
    console.log('Project Data:', {
      project_id: this.selectedProjectId,
      projectName: this.projectName,
      phases: this.phases
    });
  }

  onFileChange(event: any, phaseIndex: number, buildingIndex: number): void {
    const file = event.target.files[0];
    if (file) {
      this.phases[phaseIndex].buildings[buildingIndex].csvFile = file;
      console.log(`File selected for Phase ${phaseIndex + 1}, Building ${buildingIndex + 1}:`, file);
    }
  }

  submitBuilding(phaseIndex: number, buildingIndex: number): void {
    const building = this.phases[phaseIndex].buildings[buildingIndex];
    const csvFile = building.csvFile;


    if (!csvFile) {
      console.error('No CSV file selected for this building.');
      return;
    }

    const project_id = this.selectedProjectId;
    const phase_number = this.phases[phaseIndex].phase_number;
    const building_name = building.building_name;
    const created_by = localStorage.getItem('userId') || 'unknown';

    console.log('Submitting building data:', {
      project_id,
      phase_number,
      building_name,
      created_by,
      file: csvFile
    });

    this.projectService.uploadCsv(project_id, phase_number, building_name, created_by, csvFile).subscribe(
      (response) => {
        console.log('CSV uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading CSV:', error);
      }
    );
  }
}
