import { Component } from '@angular/core';

@Component({
  selector: 'app-agreement-requested',
  templateUrl: './agreement-requested.component.html',
  styleUrls: ['./agreement-requested.component.css']
})
export class AgreementRequestedComponent {
  navItems: string[] = ['1st Owner', '2nd Owner', '3rd Owner', 'Property', 'Preview'];
  activeIndex: number = 0; // Default active index

  setActive(index: number): void {
    this.activeIndex = index;
  }


  payments = [
    { particulars: '1st Amount Paid', chequeNo: 'Rs 100000', date: 'DD/MM/YY', amount: 'Rs 100000' },
    { particulars: '2nd Amount Paid', chequeNo: 'Rs 100000', date: 'DD/MM/YY', amount: 'Rs 100000' },
    { particulars: '3rd Amount Paid', chequeNo: 'Rs 1000', date: 'DD/MM/YY', amount: 'Rs 1000' },
    { particulars: '4th Amount Paid', chequeNo: 'Rs 10000', date: 'DD/MM/YY', amount: 'Rs 10000' },
    { particulars: '5th Amount Paid', chequeNo: 'Rs 100000', date: 'DD/MM/YY', amount: 'Rs 100000' },
    { particulars: '6th Amount Paid', chequeNo: 'Rs 100000', date: 'DD/MM/YY', amount: 'Rs 100000' },
  ];

  get totalAmount() {
    return this.payments.reduce((sum, payment) => sum + parseFloat(payment.amount.replace('Rs ', '')), 0);
  }

  edit() {
    console.log('Edit button clicked');
    // Add your logic to handle the edit functionality
  }

  sendForConfirmation() {
    console.log('Send for Confirmation button clicked');
    // Add your logic to handle sending for confirmation
  }

}
