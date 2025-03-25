import { Component } from '@angular/core';

@Component({
  selector: 'app-sm-my-team',
  templateUrl: './sm-my-team.component.html',
  styleUrls: ['./sm-my-team.component.css']
})
export class SmMyTeamComponent {
  rows = [
    {
      rmId: 1,
      name: 'Kiran C',
      projectName: '',
      phase: '',
      wing: '',
      building: '',
      unitsSold: '',
      performance: '',
    },
    {
      rmId: 2,
      name: 'Kiran C',
      projectName: '',
      phase: '',
      wing: '',
      building: '',
      unitsSold: '',
      performance: '',
    },
  ];

  // Add a column functionality
  addColumn(column: string) {
    this.rows.forEach((row: Record<string, any>) => {
      if (!row[column]) {
        row[column] = '';
      }
    });
  }
}
