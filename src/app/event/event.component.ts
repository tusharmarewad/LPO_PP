import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  // Form for adding events
  addEventForm: FormGroup;
  minToTime: string = '';
  // Calendar options
  CalenderPage = 'My_calendar';
  calendarOptions: CalendarOptions;

  // State variables
  isOnlineSelected = false;
  isOfflineSelected = false;
  isModalOpen = false;

  // Events array
  events: any[] = [];
  minDate: string;

  // Variables for popup
  popupGuests: { name: string; email: string; phone: string; selected: boolean }[] = [];
  event_name: any;
  identification_no: any;
  event_type: any;
  event_date: any;
  meeting_url: any;
  mode: any;
  event_start_time: any;
  event_end_time: any;

  constructor(private fb: FormBuilder, private apiService: ApicallService ) {
    // Set the minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    // Initialize the form
    this.addEventForm = this.fb.group({
      event_name: ['', Validators.required],
      identification_no: ['', Validators.required],
      event_type: ['', Validators.required],
      event_date: ['', Validators.required],
      event_start_time: ['', Validators.required],
      event_end_time: ['', Validators.required],
      meeting_url: [''], // Ensure this matches the expected name in the backend
      mode: [''],
      place_of_meeting: [''], // Add missing control
      guests: this.fb.array([]),
    });

    // Initialize the calendar options
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next',
      },
    };
  }

  ngOnInit(): void {
    this.getEvents(); // Fetch the events on component initialization
  }
  onFromTimeChange(event: Event): void {
    const fromTime = (event.target as HTMLInputElement).value;
    this.minToTime = fromTime; // Update the minimum "To" time dynamically
  }
  // Getter for guests FormArray
  get guestsFormArray(): FormArray {
    return this.addEventForm.get('guests') as FormArray;
  }

  // Add a guest
  addGuest() {
    const guestGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.guestsFormArray.push(guestGroup);
  }

  // Remove a guest
  removeGuest(index: number): void {
    this.guestsFormArray.removeAt(index);
  }

  // Toggle to Online mode
  toggleOnline(): void {
    this.isOnlineSelected = true;
    this.isOfflineSelected = false;
    this.addEventForm.get('meeting_url')?.setValidators(Validators.required);
    this.addEventForm.get('place_of_meeting')?.clearValidators();
    this.addEventForm.get('meeting_url')?.updateValueAndValidity();
    this.addEventForm.get('place_of_meeting')?.updateValueAndValidity();
  }

  // Toggle to Offline mode
  toggleOffline(): void {
    this.isOnlineSelected = false;
    this.isOfflineSelected = true;
    this.addEventForm.get('place_of_meeting')?.setValidators(Validators.required);
    this.addEventForm.get('meeting_url')?.clearValidators();
    this.addEventForm.get('place_of_meeting')?.updateValueAndValidity();
    this.addEventForm.get('meeting_url')?.updateValueAndValidity();
  }

  // Get the list of events from the API
  getEvents(): void {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Check if the required data exists
    if (userData && userData.id) {
      const createdBy = userData.id; // Extract the 'id' field

      this.apiService.getEvent({ created_by: createdBy }).subscribe(
        (response:any) => {
          // Parse the events and their guests
          this.events = response.upcomingEvents.map((event: any) => ({
            ...event,
            guests: event.guests ? JSON.parse(event.guests) : [], // Parse guests if present, otherwise set as empty array
          }));
        },
        (error:any) => {
          console.error('Error getting events:', error);
        }
      );
    } else {
      console.error('User data is missing or invalid.');
    }
  }

  // Edit an event
  editEvent(event: any): void {
    this.isModalOpen = true;

    // Populate the modal with the event data
    this.event_name = event.event_name;
    this.identification_no = event.identification_no;
    this.event_type = event.event_type;
    this.event_date = event.event_date;
    this.event_start_time = event.event_start_time;
    this.event_end_time = event.event_end_time;
    this.mode = event.mode;
    this.meeting_url = event.meeting_url;
    this.popupGuests = event.guests || [];
  }

  // Add a guest in the edit popup
  addPopupGuest(): void {
    this.popupGuests.push({ name: '', email: '', phone: '', selected: false });
  }

  // Remove a guest from the popup
  removePopupGuest(index: number): void {
    this.popupGuests.splice(index, 1);
  }

  // Delete selected guests in the edit popup
  deleteSelectedGuests(): void {
    this.popupGuests = this.popupGuests.filter((guest) => !guest.selected);
  }

  // Save changes made in the edit popup
  saveChanges(): void {
    const updatedEvent = {
      event_name: this.event_name,
      identification_no: this.identification_no,
      event_type: this.event_type,
      event_date: this.event_date,
      event_start_time: this.event_start_time,
      event_end_time: this.event_end_time,
      mode: this.mode,
      meeting_url: this.meeting_url,
      guests: this.popupGuests,
    };

    this.apiService.editEvent(updatedEvent).subscribe(
      (response:any) => {
        Swal.fire('Success', 'Event updated successfully!', 'success');
        this.getEvents(); // Refresh the events list
        this.isModalOpen = false; // Close the modal
      },
      (error:any) => {
        Swal.fire('Error', 'Failed to update event. Please try again.', 'error');
      }
    );
  }

  // Close the edit popup
  closePopupForm(): void {
    this.isModalOpen = false;
  }

  // Submit a new event
  onSubmit() {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const createdBy = userData.id; // Safely access the 'id' property

    if (this.addEventForm.valid) {
      const formData = { ...this.addEventForm.value };

      // Explicitly set mode
      formData.mode = this.isOnlineSelected ? 'Online' : 'Offline';

      // Add createdBy to the formData
      formData.created_by = createdBy;

      this.apiService.insertEvent(formData).subscribe(
        (response:any) => {
          Swal.fire('Success', 'Data saved successfully!', 'success').then(() =>
            this.getEvents()
          );
        },
        (error:any) => {
          Swal.fire('Error', 'Failed to save data. Please try again.', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Please fill all required fields.', 'error');
    }
  }

  // Delete an event
  deleteEvent(event: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete event "${event.event_name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteEvent(event.event_id).subscribe(
          (response:any) => {
            Swal.fire('Deleted!', 'Event has been deleted.', 'success');
            this.getEvents(); // Refresh the events list
          },
          (error:any) => {
            Swal.fire('Error', 'Failed to delete event. Please try again.', 'error');
          }
        );
      }
    });
  }
}