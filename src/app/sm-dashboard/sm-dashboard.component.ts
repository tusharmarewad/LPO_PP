import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-sm-dashboard',
  templateUrl: './sm-dashboard.component.html',
  styleUrls: ['./sm-dashboard.component.css']
})
export class SmDashboardComponent {
  ngAfterViewInit(): void {
    this.initializeBarChart(
      'barChart1',
      ['May', 'June', 'July'],
      [
        {
          label: 'Flats Sold',
          data: [7, 8, 9],
          backgroundColor: '#2b3c4e',
        },
        {
          label: 'Left',
          data: [3, 2, 1],
          backgroundColor: '#ff7f0e',
        },
      ]
    );

    this.initializeBarChart(
      'barChart2',
      ['August', 'September', 'October'],
      [
        {
          label: 'Flats Sold',
          data: [7, 2, 6],
          backgroundColor: '#2b3c4e',
        },
        {
          label: 'Left',
          data: [3, 8, 5],
          backgroundColor: '#ff7f0e',
        },
      ]
    );
  }

  initializeBarChart(chartId: string, labels: string[], datasets: any[]): void {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.error(`Chart with ID ${chartId} not found`);
    }
  }
}
