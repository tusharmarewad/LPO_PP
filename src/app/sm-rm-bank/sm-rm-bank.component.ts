import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sm-rm-bank',
  templateUrl: './sm-rm-bank.component.html',
  styleUrls: ['./sm-rm-bank.component.css']
})
export class SmRmBankComponent {
  constructor(private router: Router) {}
  next(){
    this.router.navigate(['/sm-client-bank'])
  }
}
