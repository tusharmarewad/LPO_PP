import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-accountant-update-client',
  templateUrl: './builder-accountant-update-client.component.html',
  styleUrls: ['./builder-accountant-update-client.component.css']
})
export class BuilderAccountantUpdateClientComponent {
  navItems: string[] = ['Confirm Payment', 'Issue Invoice', 'Raise Demand', 'Refund'];
  activeIndex: number = 0; // Default active index

  setActive(index: number): void {
    this.activeIndex = index;
  }

}
