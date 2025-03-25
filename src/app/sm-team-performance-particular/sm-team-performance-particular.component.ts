import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sm-team-performance-particular',
  templateUrl: './sm-team-performance-particular.component.html',
  styleUrls: ['./sm-team-performance-particular.component.css']
})
export class SmTeamPerformanceParticularComponent {
 // Donut Chart Configuration
 donutChartLabels: string[] = ['Sold', 'In Process', 'Left'];
 donutChartData: ChartData<'doughnut'> = {
   labels: this.donutChartLabels,
   datasets: [
     {
       data: [6, 3, 1],
       backgroundColor: ['#2B4E30', '#FF6E39', '#FFEC1C'],
     },
   ],
 };

 // Donut Chart Options
 donutChartOptions: ChartOptions<'doughnut'> = {
   responsive: true,
   maintainAspectRatio: false, // Disable default aspect ratio
   plugins: {
     legend: {
       display: true,
       position: 'top',
     },
   },
 };

 // Bar Chart Configuration
 barChartLabels: string[] = ['May', 'June', 'July'];
 barChartData: ChartData<'bar'> = {
   labels: this.barChartLabels,
   datasets: [
     {
       label: 'Target',
       data: [8, 9, 10],
       backgroundColor: '#FFEC1C',
     },
     {
       label: 'Status',
       data: [6, 7, 7],
       backgroundColor: '#2B4E30',
     },
   ],
 };

 // Bar Chart Options
 barChartOptions: ChartOptions<'bar'> = {
   responsive: true,
   maintainAspectRatio: false, // Allows custom height/width
   plugins: {
     legend: {
       display: true,
       position: 'top',
     },
   },
   scales: {
     x: {
       grid: {
         display: false, // Remove x-axis gridlines
       },
     },
     y: {
       beginAtZero: true,
       grid: {
         display: true,
       },
     },
   },
 };
}
