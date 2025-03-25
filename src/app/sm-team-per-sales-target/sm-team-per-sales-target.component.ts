import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sm-team-per-sales-target',
  templateUrl: './sm-team-per-sales-target.component.html',
  styleUrls: ['./sm-team-per-sales-target.component.css']
})
export class SmTeamPerSalesTargetComponent {
  constructor(private router: Router) {}

  next(){
    this.router.navigate(['/sm-team-performance-particular'])

  }
}
