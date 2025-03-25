import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sm-team-performance',
  templateUrl: './sm-team-performance.component.html',
  styleUrls: ['./sm-team-performance.component.css']
})
export class SmTeamPerformanceComponent {
    constructor(private router: Router) {}
  tableData = [
    {
      id: 1,
      name: 'Kiran C',
      project: '',
      phase: '',
      building: '',
      unsoldData: '',
      targetWeek: '',
      targetMonth: '',
      performanceWeek: '',
      performanceMonth: '',
      performanceToDate: '',
    },
    {
      id: 2,
      name: 'Kiran C',
      project: '',
      phase: '',
      building: '',
      unsoldData: '',
      targetWeek: '',
      targetMonth: '',
      performanceWeek: '',
      performanceMonth: '',
      performanceToDate: '',
    },
  ];

  next(){
    this.router.navigate(['/sm-team-per-sales-target'])
  }
}
