
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  currentSection: string = 'signup'; // Initial section
  constructor(private router: Router) { }
  navigateToSection(section: string): void {
    this.currentSection = section;
  }
  GoTo_login(){
    this.router.navigate(['/login']);
  }
}