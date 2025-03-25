import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-accountant-reports',
  templateUrl: './builder-accountant-reports.component.html',
  styleUrls: ['./builder-accountant-reports.component.css']
})
export class BuilderAccountantReportsComponent {
  generateReport(): void {
    console.log('Generate Report button clicked');
  }
}
