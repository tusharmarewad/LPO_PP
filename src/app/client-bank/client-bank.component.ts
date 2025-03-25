
import { Component } from '@angular/core';

@Component({
  selector: 'app-client-bank',
  templateUrl: './client-bank.component.html',
  styleUrls: ['./client-bank.component.css']
})
export class ClientBankComponent {
  searchText = '';
  currentPage = 1;
  pageSize = 10;
  leads = [
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', unit: 'A1', status: 'Active', remark: 'Follow up' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', unit: 'B2', status: 'Pending', remark: 'Send email' },
    // Add more sample data here
  ];
  get filteredLeads() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const filtered = this.leads.filter(lead =>
      lead.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }
  
  get totalPages() {
    return Array.from(
      { length: Math.ceil(this.leads.length / this.pageSize) },
      (_, i) => i + 1
    );
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }
}