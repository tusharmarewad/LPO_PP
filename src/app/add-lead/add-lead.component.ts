import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
interface Lead {
  name: string;
  mobile: string;
  email: string;
  type: string;
  status: string;
  remark: string;
}


@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

  
  constructor(private fb: FormBuilder, private rmleads:ApicallService) { }

  addLeadForm!: FormGroup;
  activeTab: string = 'create-lead'; // Default active tab
  leads: any= [];
  selectedFilter: keyof Lead = 'name'; 
  filteredLeads: any[] = [];

  searchText = '';
  currentPage = 1;
  pageSize = 10;

  ngOnInit(): void {

   const userID = localStorage.getItem('userId');

    this.addLeadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      createdBy: [userID] // Assuming a default user ID
    });

    this.rmleads.getLeads().subscribe(response => {
      if (response && response.data) {
          this.leads = response.data;
          this.filteredLeads = [...this.leads]; // Initialize with all data
          console.log( this.leads);
      } else {
          console.error("❌ Error: Invalid API response", response);
      }
   });
  
  }

  onSubmit(): void {
    if (this.addLeadForm.valid) {
      // console.log("Form Submitted:", this.addLeadForm.value);
      // Call API to submit form data
      const addLeadData = this.addLeadForm.value;

      this.rmleads.addLead(addLeadData).subscribe(response => {
        console.log("Lead Created Successfully:", response);
        alert("Lead Created Successfully!");
        this.addLeadForm.reset();
      }, error => {
        console.error("Error Creating Lead:", error);
        alert("Error Creating Lead");
       
      });


    } else {
      console.log("Invalid Form");
    }
  }


  // Function to update status in the database
updateStatus(lead: any) {
  this.rmleads.updateLeadStatus(lead.id, lead.status).subscribe(
    response => {
      console.log(`✅ Status Updated for ID ${lead.id}:`, response);
      alert("✅ Status Updated");
    },
    error => {
      console.error("❌ Error updating status:", error);
    }
  );
}

  
 
  

  // get filteredLeads() {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const filtered = this.leads.filter((lead: { name: string; }) =>
  //     lead.name.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  //   return filtered.slice(startIndex, startIndex + this.pageSize);
  // }

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
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  applyFilter() {
    if (!this.searchText.trim()) {
      this.filteredLeads = [...this.leads]; // Reset table if search input is empty
      return;
    }

    // Explicitly define the type of 'lead'
    this.filteredLeads = this.leads.filter((lead: Lead) => {
      const fieldValue = lead[this.selectedFilter]?.toString().toLowerCase(); 
      return fieldValue?.includes(this.searchText.toLowerCase());
    });
  }




 

}
