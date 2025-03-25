import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bdm-create-schedule',
  templateUrl: './bdm-create-schedule.component.html',
  styleUrls: ['./bdm-create-schedule.component.css']
})
export class BdmCreateScheduleComponent implements OnInit{
  scheduleForm!: FormGroup;
  submitted = false;
  isOnlineMeeting = false;
  meetingId!: number;
  meetings: any[] = [];
  selectedMeetingId: number | null = null;



  constructor(private fb: FormBuilder, 
    private scheduleService: ApicallService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllSchedules();

    this.scheduleForm = this.fb.group({
      meetingWith: [''],
      meetingDate: [''],
      modeOfMeeting: ['']
    });

    // Get Meeting ID from URL (if modifying)
    this.meetingId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.meetingId) {
      this.fetchMeetingDetails();
    }

    


    this.scheduleForm = this.fb.group({
      meetingWith: ['', Validators.required],
      meetingDate: ['', Validators.required],
      meetingTime: ['', Validators.required],
      modeOfMeeting: ['', Validators.required],
      meetingVenue: [''],
      meetingUrl: [''],
      subject: ['', Validators.required],
      referenceName: [''],
      guestName: [''],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      createdBy: ['User123'] // Change this dynamically based on logged-in user
    });

    // Watch for mode of meeting changes
    this.scheduleForm.get('modeOfMeeting')?.valueChanges.subscribe(value => {
      this.isOnlineMeeting = value === 'Online';
      if (this.isOnlineMeeting) {
        this.scheduleForm.get('meetingUrl')?.setValidators([Validators.required]);
        this.scheduleForm.get('meetingVenue')?.clearValidators();
      } else {
        this.scheduleForm.get('meetingVenue')?.setValidators([Validators.required]);
        this.scheduleForm.get('meetingUrl')?.clearValidators();
      }
      this.scheduleForm.get('meetingVenue')?.updateValueAndValidity();
      this.scheduleForm.get('meetingUrl')?.updateValueAndValidity();
    });
  }


  getAllSchedules() {
    this.scheduleService.getAllSchedules().subscribe(
      (response) => {
        if (response.success) {
          this.meetings = response.data;
          console.log(this.meetings);
          
        }
      },
      (error) => {
        console.error('Error fetching meetings:', error);
      }
    );
  }


  populateForm(meeting: any): void {
    this.selectedMeetingId = meeting.id; // Store the selected meeting ID
    this.scheduleForm.patchValue({
      meetingWith: meeting.meeting_with,
      meetingDate: meeting.meeting_date,
      meetingTime: meeting.meeting_time,
      modeOfMeeting: meeting.mode_of_meeting,
      meetingVenue: meeting.meeting_venue,
      meetingUrl: meeting.meeting_url,
      subject: meeting.subject,
      referenceName: meeting.reference_name,
      guestName: meeting.guest_name,
      emailId: meeting.email_id,
      phoneNo: meeting.phone_no
    });
  
    // Check the meeting mode and adjust form validation dynamically
    this.isOnlineMeeting = meeting.mode_of_meeting === 'Online';
  }
  


  fetchMeetingDetails(): void {
    this.scheduleService.getMeetingById(this.meetingId).subscribe(
      (response) => {
        if (response.success) {
          this.scheduleForm.patchValue({
            meetingWith: response.data.meeting_with,
            meetingDate: response.data.meeting_date,
            modeOfMeeting: response.data.mode_of_meeting
          });
        }
      },
      (error) => {
        console.error('Error fetching meeting:', error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.scheduleForm.invalid) {
      Swal.fire('Error', 'Please fill all required fields', 'error');
      return;
    }
  
    const formData = this.scheduleForm.value;
  
    if (this.selectedMeetingId) {
      // If meeting ID exists, update the meeting
      this.scheduleService.updateSchedule(this.selectedMeetingId, formData).subscribe(
        (response) => {
          Swal.fire('Success', 'Meeting updated successfully!', 'success');
          this.getAllSchedules(); // Refresh table data
          this.scheduleForm.reset();
          this.selectedMeetingId = null; // Reset selection
          this.submitted = false;
        },
        (error) => {
          Swal.fire('Error', 'Failed to update meeting. Try again later.', 'error');
        }
      );
    } else {
      // Otherwise, add a new meeting
      this.scheduleService.bdmAddSchedule(formData).subscribe(
        (response) => {
          Swal.fire('Success', 'Meeting scheduled successfully!', 'success');
          this.getAllSchedules(); // Refresh table data
          this.scheduleForm.reset();
          this.submitted = false;
        },
        (error) => {
          Swal.fire('Error', 'Failed to schedule meeting. Try again later.', 'error');
        }
      );
    }
  }
  
}





