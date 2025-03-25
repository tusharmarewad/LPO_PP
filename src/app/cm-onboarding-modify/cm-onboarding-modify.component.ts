import { Component } from '@angular/core';

@Component({
  selector: 'app-cm-onboarding-modify',
  templateUrl: './cm-onboarding-modify.component.html',
  styleUrls: ['./cm-onboarding-modify.component.css']
})
export class CMOnboardingModifyComponent {
  activeTab: string = 'login-details'; // Default active tab
  projectIds: string[] = ['XYZ', 'ABC', 'DEF'];
  projectId: string = '';
  projectName: string = '';
  location: string = 'XYZ'; // Example pre-filled location
  projectFullName: string = 'XYZ';
  phases: string[] = ['Phase 1', 'Phase 2', 'Phase 3'];
  selectedPhase: string = '';
  buildings: string[] = ['Building A', 'Building B', 'Building C'];
  selectedBuilding: string = '';
  buildingName: string = 'XYZ';

  onModify() {
    console.log('Modify clicked', {
      projectId: this.projectId,
      projectName: this.projectName,
      location: this.location
    });
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  }

  onSubmit() {
    console.log('Form submitted', {
      projectId: this.projectId,
      projectName: this.projectName,
      selectedPhase: this.selectedPhase,
      selectedBuilding: this.selectedBuilding
    });
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
