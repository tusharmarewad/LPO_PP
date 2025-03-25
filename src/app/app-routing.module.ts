import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { AddClientComponent } from './add-client/add-client.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CampignComponent } from './campign/campign.component';
import { ClientBankComponent } from './client-bank/client-bank.component';
import { EventComponent } from './event/event.component';
import { AgreementRequestedComponent } from './agreement-requested/agreement-requested.component';
import { AgreementRegisteredComponent } from './agreement-registered/agreement-registered.component';
import { AgreementResubmisionComponent } from './agreement-resubmision/agreement-resubmision.component';
import { RequestForStampdutyComponent } from './request-for-stampduty/request-for-stampduty.component';
import { RequestForCertifiedComponent } from './request-for-certified/request-for-certified.component';
import { RequestForBindingComponent } from './request-for-binding/request-for-binding.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { Lawyer1DashboardComponent } from './lawyer1-dashboard/lawyer1-dashboard.component';
import { Lawyer2DashboardComponent } from './lawyer2-dashboard/lawyer2-dashboard.component';
import { L2AgreementResubmissionComponent } from './l2-agreement-resubmission/l2-agreement-resubmission.component';
import { L2AgreementRegisteredComponent } from './l2-agreement-registered/l2-agreement-registered.component';
import { L2AgreementReviewComponent } from './l2-agreement-review/l2-agreement-review.component';
import { L2NewdraftCreateComponent } from './l2-newdraft-create/l2-newdraft-create.component';
import { L2NewdraftResubmissionComponent } from './l2-newdraft-resubmission/l2-newdraft-resubmission.component';
import { Lawyer2RequestforStampdutyComponent } from './lawyer2-requestfor-stampduty/lawyer2-requestfor-stampduty.component';
import { Lawyer2RequestforBindingComponent } from './lawyer2-requestfor-binding/lawyer2-requestfor-binding.component';
import { Lawyer2RequestforCertifiedComponent } from './lawyer2-requestfor-certified/lawyer2-requestfor-certified.component';
import { Lawyer2CreateScheduleComponent } from './lawyer2-create-schedule/lawyer2-create-schedule.component';
import { ExecutorClientSignatureComponent } from './executor-client-signature/executor-client-signature.component';
import { ExecutorBuilderSignatureComponent } from './executor-builder-signature/executor-builder-signature.component';
import { ExecutorResubmissionComponent } from './executor-resubmission/executor-resubmission.component';
import { ExcuterDashboardComponent } from './excuter-dashboard/excuter-dashboard.component';
import { ExexutorClientAppointmentComponent } from './exexutor-client-appointment/exexutor-client-appointment.component';
import { ExexutorBuilderAppointmentComponent } from './exexutor-builder-appointment/exexutor-builder-appointment.component';
import { BuilderAgreementExecutionComponent } from './builder-agreement-execution/builder-agreement-execution.component';
import { BuiderDashboardComponent } from './buider-dashboard/buider-dashboard.component';
import { BuilderAgreementResubmissionComponent } from './builder-agreement-resubmission/builder-agreement-resubmission.component';
import { BuilderCheckAvailabilityComponent } from './builder-check-availability/builder-check-availability.component';
import { BuilderReportComponent } from './builder-report/builder-report.component';
import { SmDashboardComponent } from './sm-dashboard/sm-dashboard.component';
import { AuthorityDashboardComponent } from './authority-dashboard/authority-dashboard.component';
import { AuthorityReportComponent } from './authority-report/authority-report.component';
import { AuthorityRequestComponent } from './authority-request/authority-request.component';
import { AuthorityResubmissionComponent } from './authority-resubmission/authority-resubmission.component';
import { LoanDepDashboardComponent } from './loan-dep-dashboard/loan-dep-dashboard.component';
import { LoanDepRequestComponent } from './loan-dep-request/loan-dep-request.component';
import { LoanDepDisbursementRequestComponent } from './loan-dep-disbursement-request/loan-dep-disbursement-request.component';
import { LoanDepNewDemandComponent } from './loan-dep-new-demand/loan-dep-new-demand.component';
import { LoanDepReportComponent } from './loan-dep-report/loan-dep-report.component';
import { PrinterDashboardComponent } from './printer-dashboard/printer-dashboard.component';
import { PrinterAgreementPrintComponent } from './printer-agreement-print/printer-agreement-print.component';
import { PrinterAgreementDeliveryComponent } from './printer-agreement-delivery/printer-agreement-delivery.component';
import { PrinterScheduleClientComponent } from './printer-schedule-client/printer-schedule-client.component';
import { PrinterScheduleBuilderComponent } from './printer-schedule-builder/printer-schedule-builder.component';
import { BDMDashboardComponent } from './bdm-dashboard/bdm-dashboard.component';
import { BdmCreateScheduleComponent } from './bdm-create-schedule/bdm-create-schedule.component';
import { BdmAddLeadComponent } from './bdm-add-lead/bdm-add-lead.component';
import { BdmLeadStatusComponent } from './bdm-lead-status/bdm-lead-status.component';
import { BdmAddProjectComponent } from './bdm-add-project/bdm-add-project.component';
import { CMDashboardComponent } from './cm-dashboard/cm-dashboard.component';
import { CMAddLeadComponent } from './cm-add-lead/cm-add-lead.component';
import { CMLeadStatusComponent } from './cm-lead-status/cm-lead-status.component';
import { CMOnboardingNewDataComponent } from './cm-onboarding-new-data/cm-onboarding-new-data.component';
import { CMOnboardingModifyComponent } from './cm-onboarding-modify/cm-onboarding-modify.component';
import { CMDraftNewAgreementComponent } from './cm-draft-new-agreement/cm-draft-new-agreement.component';
import { CMDraftAdHocComponent } from './cm-draft-ad-hoc/cm-draft-ad-hoc.component';
import { CMReportBdmComponent } from './cm-report-bdm/cm-report-bdm.component';
import { CMReportAgreementComponent } from './cm-report-agreement/cm-report-agreement.component';
import { CMAddProjectComponent } from './cm-add-project/cm-add-project.component';
import { BdmAdHocComponent } from './bdm-ad-hoc/bdm-ad-hoc.component';
import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { AccountantPaymentCertifiedComponent } from './accountant-payment-certified/accountant-payment-certified.component';
import { AccountantPaymentStampdutyComponent } from './accountant-payment-stampduty/accountant-payment-stampduty.component';
import { SmViewMasterDataComponent } from './sm-view-master-data/sm-view-master-data.component';
import { SmCheckAvailabilityComponent } from './sm-check-availability/sm-check-availability.component';
import { SmSalesTargetComponent } from './sm-sales-target/sm-sales-target.component';
import { SmTeamPerSalesTargetComponent } from './sm-team-per-sales-target/sm-team-per-sales-target.component';
import { SmMyTeamComponent } from './sm-my-team/sm-my-team.component';
import { SmTeamPerformanceComponent } from './sm-team-performance/sm-team-performance.component';
import { SmAccountsComponent } from './sm-accounts/sm-accounts.component';
import { SmAddRmLeadsComponent } from './sm-add-rm-leads/sm-add-rm-leads.component';
import { SmRmBankComponent } from './sm-rm-bank/sm-rm-bank.component';
import { SmClientBankComponent } from './sm-client-bank/sm-client-bank.component';
import { SmCancelRefundComponent } from './sm-cancel-refund/sm-cancel-refund.component';
import { SmTeamPerformanceParticularComponent } from './sm-team-performance-particular/sm-team-performance-particular.component';
import { SrLawyerDashboardComponent } from './sr-lawyer-dashboard/sr-lawyer-dashboard.component';
import { SrLawyerAgreementsNewAgreementsComponent } from './sr-lawyer-agreements-new-agreements/sr-lawyer-agreements-new-agreements.component';
import { SrLawyerReportsTeamComponent } from './sr-lawyer-reports-team/sr-lawyer-reports-team.component';
import { SrLawyerReportsAgreementsComponent } from './sr-lawyer-reports-agreements/sr-lawyer-reports-agreements.component';
import { SrLawyerAgreementAdHocComponent } from './sr-lawyer-agreement-ad-hoc/sr-lawyer-agreement-ad-hoc.component';
import { SrLawyerAgreementResubmissionComponent } from './sr-lawyer-agreement-resubmission/sr-lawyer-agreement-resubmission.component';
import { AccountantPaymentMiscellaneousComponent } from './accountant-payment-miscellaneous/accountant-payment-miscellaneous.component';
import { AccountantReceiptAgreeInvoiceComponent } from './accountant-receipt-agree-invoice/accountant-receipt-agree-invoice.component';
import { AccountantReceiptStampdutyComponent } from './accountant-receipt-stampduty/accountant-receipt-stampduty.component';
import { AccountantReceiptAdHocComponent } from './accountant-receipt-ad-hoc/accountant-receipt-ad-hoc.component';
import { AccountantReportsComponent } from './accountant-reports/accountant-reports.component';
import { LpoAdminDashboardComponent } from './lpo-admin-dashboard/lpo-admin-dashboard.component';
import { LpoAdminLoginProjectDetailsComponent } from './lpo-admin-login-project-details/lpo-admin-login-project-details.component';
import { LpoAdminAddLeadsComponent } from './lpo-admin-add-leads/lpo-admin-add-leads.component';
import { LpoAdminLeadStatusComponent } from './lpo-admin-lead-status/lpo-admin-lead-status.component';
import { LpoAdminDraftNewAgreementComponent } from './lpo-admin-draft-new-agreement/lpo-admin-draft-new-agreement.component';
import { LpoAdminDraftAdHocComponent } from './lpo-admin-draft-ad-hoc/lpo-admin-draft-ad-hoc.component';
import { LpoAdminReportsComponent } from './lpo-admin-reports/lpo-admin-reports.component';
import { BuilderAccountantDashboardComponent } from './builder-accountant-dashboard/builder-accountant-dashboard.component';
import { BuilderAccountantCheckAvailabilityComponent } from './builder-accountant-check-availability/builder-accountant-check-availability.component';
import { BuilderAccountantUpdateClientComponent } from './builder-accountant-update-client/builder-accountant-update-client.component';
import { BuilderAccountantReportsComponent } from './builder-accountant-reports/builder-accountant-reports.component';
import { BuilderAccountantClientLedgerComponent } from './builder-accountant-client-ledger/builder-accountant-client-ledger.component';
import { BuilderAccountantBankNocComponent } from './builder-accountant-bank-noc/builder-accountant-bank-noc.component';
import { BuilderAccountantAgreementStatusComponent } from './builder-accountant-agreement-status/builder-accountant-agreement-status.component';
import { BuilderAccountantExecutorReportComponent } from './builder-accountant-executor-report/builder-accountant-executor-report.component';
import { BuilderAdminDashboardComponent } from './builder-admin-dashboard/builder-admin-dashboard.component';
import { BuilderAdminCheckAvailabilityComponent } from './builder-admin-check-availability/builder-admin-check-availability.component';
import { BuilderAdminClientLedgerComponent } from './builder-admin-client-ledger/builder-admin-client-ledger.component';
import { BuilderAdminAgreementStatusComponent } from './builder-admin-agreement-status/builder-admin-agreement-status.component';
import { BuilderAdminClientReportComponent } from './builder-admin-client-report/builder-admin-client-report.component';
import { BuilderAdminSalesReportComponent } from './builder-admin-sales-report/builder-admin-sales-report.component';
import { BuilderAdminUpdateClientComponent } from './builder-admin-update-client/builder-admin-update-client.component';
import { SrLawyerAgreementAdHocByJrLawyerComponent } from './sr-lawyer-agreement-ad-hoc-by-jr-lawyer/sr-lawyer-agreement-ad-hoc-by-jr-lawyer.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'Home', component: DashboardComponent },
  { path: 'add-lead', component: AddLeadComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'check-availability', component: CheckAvailabilityComponent },
  {path:'loan-status', component: LoanstatusComponent},
  {path:'calculator', component: CalculatorComponent},
  {path:'campign', component: CampignComponent},
  {path:'client-bank', component: ClientBankComponent},
  {path: 'event' , component: EventComponent},
  { path: 'agreement-requested' , component: AgreementRequestedComponent},
  { path: 'agreement-registered' , component: AgreementRegisteredComponent},
  { path: 'agreement-resubmision', component:AgreementResubmisionComponent},
  { path: 'request-for-stampduty', component:RequestForStampdutyComponent},
  { path: 'request-for-certified', component:RequestForCertifiedComponent},
  { path: 'request-for-binding', component:RequestForBindingComponent},
  { path: 'create-schedule', component:CreateScheduleComponent},
  { path: 'lawyer1-dashboard', component:Lawyer1DashboardComponent},
  { path: 'lawyer2-dashboard' , component: Lawyer2DashboardComponent},
  { path: 'L2-agreement-resubmission' , component:L2AgreementResubmissionComponent},
  { path: 'L2-agreement-registered', component:L2AgreementRegisteredComponent},
  { path: 'L2-agreement-review' , component:L2AgreementReviewComponent},
  { path: 'L2-newdraft-create' , component:L2NewdraftCreateComponent},
  { path: 'L2-newdraft-resubmission' , component:L2NewdraftResubmissionComponent},
  { path: 'L2-request-for-stampduty' , component:Lawyer2RequestforStampdutyComponent},
  { path: 'L2-request-for-binding' , component:Lawyer2RequestforBindingComponent},
  { path: 'L2-request-for-certified' , component:Lawyer2RequestforCertifiedComponent},
  { path: 'L2-create-schedule' , component:Lawyer2CreateScheduleComponent},
  { path: 'executor-dashboard' ,component: ExcuterDashboardComponent},
  { path: 'executor-client-signature' ,component: ExecutorClientSignatureComponent},
  { path: 'executor-builder-signature' ,component: ExecutorBuilderSignatureComponent},
  { path: 'executor-resubmission' ,component: ExecutorResubmissionComponent},
  { path: 'executor-client-appointment' ,component: ExexutorClientAppointmentComponent},
  { path: 'executor-builder-appointment' ,component: ExexutorBuilderAppointmentComponent},
  { path: 'builder-dashboard' ,component: BuiderDashboardComponent},
  { path: 'builder-agreenment-execution' ,component: BuilderAgreementExecutionComponent},
  { path: 'builder-agreenment-resubmission' ,component: BuilderAgreementResubmissionComponent},
  { path: 'builder-check-availability' ,component: BuilderCheckAvailabilityComponent},
  { path: 'builder-report' ,component: BuilderReportComponent},

  // SM Login

  { path: 'sm-dashboard' ,component:SmDashboardComponent},
  { path: 'sm-view-master-data' ,component:SmViewMasterDataComponent},
  { path: 'sm-check-availability' ,component:SmCheckAvailabilityComponent},
  { path: 'sm-sales-target' ,component:SmSalesTargetComponent},
  { path: 'sm-team-per-sales-target' ,component:SmTeamPerSalesTargetComponent},
  { path: 'sm-my-team' ,component:SmMyTeamComponent},
  { path: 'sm-team-performance' ,component:SmTeamPerformanceComponent},
  { path: 'sm-team-performance-particular' ,component:SmTeamPerformanceParticularComponent},
  { path: 'sm-accounts' ,component:SmAccountsComponent},
  { path: 'sm-add-leads' ,component:SmAddRmLeadsComponent},
  { path: 'sm-rm-bank' ,component:SmRmBankComponent},
  { path: 'sm-client-bank' ,component:SmClientBankComponent},
  { path: 'sm-cancel-refund' ,component:SmCancelRefundComponent},





  //Authority Approval Department 

  { path: 'authority-dashboard' ,component:AuthorityDashboardComponent},
  { path: 'authority-report' ,component:AuthorityReportComponent},
  { path: 'authority-request' ,component:AuthorityRequestComponent},
  { path: 'authority-resubmission' ,component:AuthorityResubmissionComponent},


  //Loan Department

  { path: 'loan-dashboard' ,component:LoanDepDashboardComponent},
  { path: 'disbursment-loan-request' ,component:LoanDepDisbursementRequestComponent},
  { path: 'loan-request' ,component:LoanDepRequestComponent},
  { path: 'loan-new-demand' ,component:LoanDepNewDemandComponent},
  { path: 'loan-new-report' ,component:LoanDepReportComponent},

    //Printer Department

    { path: 'printer-dashboard' ,component:PrinterDashboardComponent},
    { path: 'printer-agreement-print' ,component:PrinterAgreementPrintComponent},
    { path: 'printer-agreement-delivery' ,component:PrinterAgreementDeliveryComponent},
    { path: 'printer-schedule-client' ,component:PrinterScheduleClientComponent},
    { path: 'printer-schedule-builder' ,component:PrinterScheduleBuilderComponent},


     //BDM Department

     { path: 'bdm-dashboard' ,component:BDMDashboardComponent},
    { path: 'bdm-create-schedule' ,component:BdmCreateScheduleComponent},
    { path: 'bdm-add-lead' ,component:BdmAddLeadComponent},
    { path: 'bdm-lead-status' ,component:BdmLeadStatusComponent},
    { path: 'bdm-add-project' ,component:BdmAddProjectComponent},
    { path: 'bdm-ad-hoc' ,component:BdmAdHocComponent},
    
     //CM Department

     { path: 'cm-dashboard' ,component:CMDashboardComponent},
    // { path: 'bdm-create-schedule' ,component:BdmCreateScheduleComponent},
    { path: 'cm-add-lead' ,component:CMAddLeadComponent},
    { path: 'cm-lead-status' ,component:CMLeadStatusComponent},
    { path: 'cm-onboarding-new-data' ,component:CMOnboardingNewDataComponent},
    { path: 'cm-onboarding-modify' ,component:CMOnboardingModifyComponent},
    { path: 'cm-draft-new-agreement' ,component:CMDraftNewAgreementComponent},
    { path: 'cm-draft-ad-hoc' ,component:CMDraftAdHocComponent},
    { path: 'cm-report-bdm' ,component:CMReportBdmComponent},
    { path: 'cm-report-agreement' ,component:CMReportAgreementComponent},
    { path: 'cm-add-project' ,component:CMAddProjectComponent},
  

      //CM Department

      { path: 'accountant-dashboard' ,component:AccountantDashboardComponent},
      { path: 'accountant-payment-certified' ,component:AccountantPaymentCertifiedComponent},
      { path: 'accountant-payment-stampduty' ,component:AccountantPaymentStampdutyComponent},
      { path: 'accountant-payment-miscellaneous' ,component:AccountantPaymentMiscellaneousComponent},
      { path: 'accountant-receipt-agree-invoice' ,component:AccountantReceiptAgreeInvoiceComponent},
      { path: 'accountant-receipt-agree-stampduty' ,component:AccountantReceiptStampdutyComponent},
      { path: 'accountant-receipt-ad-hoc' ,component:AccountantReceiptAdHocComponent},
      { path: 'accountant-reports' ,component:AccountantReportsComponent},

      //SR Lawyer Department

      { path: 'sr-lawyer-dashboard' ,component:SrLawyerDashboardComponent},
      { path: 'sr-lawyer-new-agreements' ,component:SrLawyerAgreementsNewAgreementsComponent},
      { path: 'sr-lawyer-reports-team' ,component:SrLawyerReportsTeamComponent},
      { path: 'sr-lawyer-reports-agreements' ,component:SrLawyerReportsAgreementsComponent},
      { path: 'sr-lawyer-agreement-ad-hoc' ,component:SrLawyerAgreementAdHocComponent},
      { path: 'sr-lawyer-agreement-ad-hoc-by-jr-lawyer' ,component:SrLawyerAgreementAdHocByJrLawyerComponent},
      { path: 'sr-lawyer-agreement-resubmission' ,component:SrLawyerAgreementResubmissionComponent},
  
  
           //Lpo Admin Department
      { path: 'lpo-admin-dashboard' ,component:LpoAdminDashboardComponent},
      { path: 'lpo-admin-login-project-details' ,component:LpoAdminLoginProjectDetailsComponent},
      { path: 'lpo-admin-add-leads' ,component:LpoAdminAddLeadsComponent},
      { path: 'lpo-admin-lead-status' ,component:LpoAdminLeadStatusComponent},
      { path: 'lpo-admin-draft-new-agreement' ,component:LpoAdminDraftNewAgreementComponent},
      { path: 'lpo-admin-draft-ad-hoc' ,component:LpoAdminDraftAdHocComponent},
      { path: 'lpo-admin-reports' ,component:LpoAdminReportsComponent},

       //Builder Accountant Department
       { path: 'builder-account-dashboard' ,component:BuilderAccountantDashboardComponent},
       { path: 'builder-account-check-availability' ,component:BuilderAccountantCheckAvailabilityComponent},
       { path: 'builder-account-update-client' ,component:BuilderAccountantUpdateClientComponent},
       { path: 'builder-account-reports' ,component:BuilderAccountantReportsComponent},
       { path: 'builder-account-client-ledger' ,component:BuilderAccountantClientLedgerComponent},
       { path: 'builder-account-bank-noc' ,component:BuilderAccountantBankNocComponent},
       { path: 'builder-account-agreement-status' ,component:BuilderAccountantAgreementStatusComponent},
       { path: 'builder-account-executor-report' ,component:BuilderAccountantExecutorReportComponent},


       //Builder Admin Department
       { path: 'builder-admin-dashboard' ,component:BuilderAdminDashboardComponent},
       { path: 'builder-admin-check-availability' ,component:BuilderAdminCheckAvailabilityComponent},
       { path: 'builder-admin-client-ledger' ,component:BuilderAdminClientLedgerComponent},
       { path: 'builder-admin-agreement-status' ,component:BuilderAdminAgreementStatusComponent},
       { path: 'builder-admin-client-report' ,component:BuilderAdminClientReportComponent},
       { path: 'builder-admin-sales-report' ,component:BuilderAdminSalesReportComponent},
       { path: 'builder-admin-update-client' ,component:BuilderAdminUpdateClientComponent},



  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
