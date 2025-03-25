import { Component } from '@angular/core';

@Component({
  selector: 'app-sm-client-bank',
  templateUrl: './sm-client-bank.component.html',
  styleUrls: ['./sm-client-bank.component.css']
})
export class SmClientBankComponent {
clientbank:boolean= false;

next(){
  this.clientbank = true;
}
}
