import { Component } from '@angular/core';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
  styleUrls: ['./loanstatus.component.css']
})
export class LoanstatusComponent {
public issubmit:boolean = false;
onclick(){
  this.issubmit = true;
}
previous(){
  this.issubmit = false;
}
}
