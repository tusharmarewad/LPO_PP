import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  activeTab: string = 'Check_Availability'; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  printPage(): void {
    const printContents = document.getElementById('print-section')?.innerHTML;
    const originalContents = document.body.innerHTML;
  
    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload the page to restore original view
    }
  }

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event?: Event) {
    if (event) {
      // Prevent close if modal content is clicked
      event.stopPropagation();
    }
    this.isModalOpen = false;
  }
  
}