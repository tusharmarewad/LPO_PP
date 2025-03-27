import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  isBDMLeadActive: boolean = false;
  isLawyer2LeadActive: boolean = false;
  isLayer2NewDraftsActive: boolean = false;
  isLawyer2RequestForActive: boolean = false;
  isCMLeadActive:boolean = false;
  isOnboardingActive:boolean = false;
  isDraftActive:boolean = false;
  isReportActive:boolean = false;
  isSrLawyerActive:boolean = false;
  isSrLawyerReportActive:boolean = false;
  isLpoAdminActive:boolean = false;
  isLpoAdminDraftActive:boolean = false;


  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:5000';
  // private baseUrl = 'http://192.168.1.45:5000';


  getEvent(user_id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/fetch`, user_id);
  }
  insertEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events/insert`, eventData);
  }
  
  editEvent(updatedEvent:any){
    return this.http.post(`${this.baseUrl}/events/insert`, updatedEvent);
  }
  deleteEvent(eventId: any): Observable<any> {
    const body = { event_id: eventId };
    return this.http.post(`${this.baseUrl}/events/delete`, body);
  }


login(data: any): Observable<any> {
  console.log("fsdsdaf",data);
  return this.http.post<any>(`${this.baseUrl}/user/login`, data);
  // return this.http.post(`${this.baseUrl}/events/delete`, body);
}


             // RM LEADS API

addLead(data: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/rmLead/addLead`, data);
}

getLeads():Observable<any>{
  return this.http.get(`${this.baseUrl}/rmLead/getLead`);
}

updateLeadStatus(id: string, status: string): Observable<any> {
  return this.http.put(`${this.baseUrl}/rmLead/updateLeadStatus/${id}`, {status} );
}


//BDM LEAD ADD API'S

bdmaddLead(data: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/bdmLead/add`, data);
}

bdmgetLeads():Observable<any>{
  return this.http.get(`${this.baseUrl}/bdmLead/all`);
}

bdmgetLeadsCreatedBy(createdBy:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/bdmLead/all/${createdBy}`);
}

bdmupdateLeadStatus(leadId: string, status: string): Observable<any> {
  return this.http.put(`${this.baseUrl}/bdmLead/update-status/${leadId}`, { status: status } );
}


bdmAddProject(data: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/bdmAddProject/add`, data);
}


getallproject():Observable<any>{
  return this.http.get(`${this.baseUrl}/bdmAddProject/fetch`);
}

getProjectsByCreatedBy(creted_by: number):Observable<any>{
  return this.http.get(`${this.baseUrl}/bdmAddProject/fetch/${creted_by}`);
}

addproject(projectId: string, updatedData: any):Observable<any>{
  return this.http.put(`${this.baseUrl}/bdmAddProject/update/${projectId}`, updatedData);
}


bdmAddSchedule(data: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/bdmSchedule/add`, data);
}

getMeetingById(meetingId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/bdmSchedule/fetch/${meetingId}`);
}

getSchedulesByCreatedBy(creted_by: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/bdmSchedule/schedules/${creted_by}`);
}

  // ✅ Fetch all scheduled meetings
  getAllSchedules(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bdmSchedule/get-all`);
  }

  updateSchedule(id: number, scheduleData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/bdmSchedule/update/${id}`, scheduleData );
  }



  bdm_Draft_Req_AdHoc(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bdm-draft-req/ad-hoc`, formData);
  }


   // ✅ GET API - Fetch All Draft Requests
   getBdmDraftRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bdm-draft-req/get-all`);
  }

    // ✅ GET API - Fetch All Draft Requests
    getDraftRequestsByCreatedBy(created_by: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/bdm-draft-req/get-all/${created_by}`);
    }

  // ✅ PUT API - Update Draft Request by Client ID
  updateBdmDraftRequest(id: string, updateData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/bdm-draft-req/update-draft/${id}`, updateData);
  }

  updateAddHocStatusByJrLawyer(id: number, status: string, remark: string) {
    return this.http.put(`${this.baseUrl}/bdm-draft-req/update-status`, { id, status, remark });
  }
  
  updateProjectAgreementsByJrLawyer(id: number, status: string, remark: string) {
    return this.http.put(`${this.baseUrl}/bdm-draft-req/update-agreement-status`, { id, status, remark });
  }
  

  // ✅ Fetch all scheduled meetings
  get_ProjectId_from_cmDraftReq(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cm-draft-req/get-project-Id`);
  }

  // ✅ Fetch all scheduled meetings
  getProjectIdSubmitedByClientManager(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cm-draft-req/get-project-Id-submited-by-cm`);
  }

  AgreementJrLawyer(user_id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/cm-draft-req/agreements/${user_id}`);
  }

  AddHocAgreementJrLawyer(user_id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/cm-draft-req/addhoc-agreement/${user_id}`);
  }

  fetchRedoAddHocs(user_id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/cm-draft-req/addhoc-agreement-redo/${user_id}`);
  }

  fetchProjectAgreementsRedo(user_id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/cm-draft-req/project-agreement-redo/${user_id}`);
  }


  submitAgreement(data: any): Observable<any> {
     return this.http.post(`${this.baseUrl}/cm-draft-req/add-new-agreement`, data);
  }

  getAllAgreements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cm-draft-req/getAllAgreements`);
 }

//  getAgreementsByCreatedBy(created_by: number): Observable<any> {
//   return this.http.get(`${this.baseUrl}/cm-draft-req/getAllAgreements/${created_by}`);
// }

getAgreementsByDraftedBy(userId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/cm-draft-req/getAllNewProjectAgreements/${userId}`);
}

  // Method to update the agreement
  // updateAgreement(projectId: string, updatedAgreement: any): Observable<any> {
   
  //   // return this.http.put(url, updatedAgreement);
  //   return this.http.put(`${this.baseUrl}/cm-draft-req/updateAgreement/${projectId}`, {updatedAgreement});
  // }

updateAgreement(projectId: string, updatedAgreement: any): Observable<any> {
  const url = `${this.baseUrl}/cm-draft-req/updateAgreement/${projectId}`;  
  return this.http.put(url, updatedAgreement);
}


//jr lawyer name fetch

 fetchJrLawyerName(): Observable<any> {
  return this.http.get(`${this.baseUrl}/fetch/jrlawyer`);
}




//Project Details

/**
   * Upload a CSV file along with additional fields:
   * project_id, phase_number, building_name, created_by
   */
uploadCsv(
  project_id: string,
  phase_number: string,
  building_name: string,
  created_by: string,
  csvFile: File
): Observable<any> {
  const formData = new FormData();
  formData.append('project_id', project_id);
  formData.append('phase_number', phase_number);
  formData.append('building_name', building_name);
  formData.append('created_by', created_by);
  formData.append('csvFile', csvFile);

  // This calls your /upload-csv route in Node/Express
  return this.http.post(`${this.baseUrl}/project-details/upload-csv`, formData);
}

/**
 * (Optional) Fetch all records by project ID
 * If you want to show or refresh data after upload
 */
fetchAllProjectDetailsRecords(): Observable<any> {
  return this.http.get(`${this.baseUrl}/project-details/fetch-all-project-details`);
}

downloadProjectExcel(projectId: string): Observable<Blob> {
  return this.http.get(`${this.baseUrl}/project-details/download-excel/${projectId}`, {
    responseType: 'blob'  // Do NOT cast as 'json'
  });
}




/**
 * (Optional) Update a record by its ID
 */
updateRecord(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/project-details/update/${id}`, data);
}

updateProjectStatusByAdmin(data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/project-details/updateStatus`, data);
}
}






 

