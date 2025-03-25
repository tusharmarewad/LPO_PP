import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-admin-update-client',
  templateUrl: './builder-admin-update-client.component.html',
  styleUrls: ['./builder-admin-update-client.component.css']
})
export class BuilderAdminUpdateClientComponent {

  navItems: string[] = ['Approve Invoice', 'Approve Refund', 'Approve Agreement'];
  activeIndex: number = 0; // Default active index

  setActive(index: number): void {
    this.activeIndex = index;
  }
}
