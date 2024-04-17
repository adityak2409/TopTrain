


import { NgModule} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { UpdateIndustryComponent } from './update-industry/update-industry.component';
import { APP_BASE_HREF } from '@angular/common';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';
import { AddEnduserplanComponent } from './add-enduserplan/add-enduserplan.component';

import { EnduserplanListComponent } from './enduserplan-list/enduserplan-list.component';
import { UpdateEnduserplanComponent } from './update-enduserplan/update-enduserplan.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { AddReviewsComponent } from './add-reviews/add-reviews.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { UpdateReviewsComponent } from './update-reviews/update-reviews.component';

import { AddSocialmediaComponent } from './add-socialmedia/add-socialmedia.component';
import { SocialmediaListComponent } from './socialmedia-list/socialmedia-list.component';
import { UpdateSocialmediaComponent } from './update-socialmedia/update-socialmedia.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { AddEnrollmentComponent } from './add-enrollment/add-enrollment.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { UpdateEnrollmentComponent } from './update-enrollment/update-enrollment.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { AddApplicationtrackerComponent } from './add-applicationtracker/add-applicationtracker.component';
import { ApplicationtrackerListComponent } from './applicationtracker-list/applicationtracker-list.component';
import { UpdateApplicationtrackerComponent } from './update-applicationtracker/update-applicationtracker.component';

import { EmployerListComponent } from './employer-list/employer-list.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { LoginComponent } from './LoginModule/login/login.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { ForgetPasswordComponent } from './LoginModule/forget-password/forget-password.component';
import { OTPComponent } from './LoginModule/otp/otp.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { VerifyEmailComponent } from './LoginModule/verify-email/verify-email.component';
import { ForgotmailComponent } from './LoginModule/forgotmail/forgotmail.component';


import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';



import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './LoginModule/userdetail/userdetail.component';
import { SelectRoleComponent } from './select-role/select-role.component';
import { VendorDetailComponent } from './LoginModule/vendor-detail/vendor-detail.component';
import { PurchasePlanComponent } from './purchase-plan/purchase-plan.component';

import { RoleComponent } from './role/role.component';
import { TopTrainPlanComponent } from './top-train-plan/top-train-plan.component';
import { TopTrainPlanListComponent } from './top-train-plan-list/top-train-plan-list.component';
import { PurchasePlanListComponent } from './purchase-plan-list/purchase-plan-list.component';
import { UpdatePurchasePlanListComponent } from './update-purchase-plan-list/update-purchase-plan-list.component';
import { UpdateTopTrainPlanComponent } from './update-top-train-plan/update-top-train-plan.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { EndUserDashboardComponent } from './end-user-dashboard/end-user-dashboard.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { EndUserListComponent } from './end-user-list/end-user-list.component';
import { DescriptionPipe } from './description.pipe';
import { EndUserJobListComponent } from './end-user-job-list/end-user-job-list.component';
import { AppliedJobListComponent } from './applied-job-list/applied-job-list.component';

import { AppliedCourseListComponent } from './applied-course-list/applied-course-list.component';
import { AddUserSkillComponent } from './add-user-skill/add-user-skill.component';
import { UserSkillListComponent } from './user-skill-list/user-skill-list.component';
import { UpdateUserSkillComponent } from './update-user-skill/update-user-skill.component';
import { NewDropDownComponent } from './new-drop-down/new-drop-down.component';
import { DropDownWithAPIComponent } from './drop-down-with-api/drop-down-with-api.component';
import { AssignRoleComponent } from './LoginModule/assign-role/assign-role.component';
import { UserDashboardComponent } from './LoginModule/user-dashboard/user-dashboard.component';
import { VendorDashboardNewComponent } from './LoginModule/vendor-dashboard-new/vendor-dashboard-new.component';

import { AddUserEducationComponent } from './add-user-education/add-user-education.component';
import { AddAchievementComponent } from './add-achievement/add-achievement.component';


@NgModule({
  declarations: [
    
    AppComponent,
    AddIndustryComponent,
    IndustryListComponent,
    UpdateIndustryComponent,
    AddInstructorComponent,
    InstructorListComponent,
    UpdateInstructorComponent,
    AddEnduserplanComponent,
   
    EnduserplanListComponent,
    UpdateEnduserplanComponent,
    AddSkillsComponent,
    SkillsListComponent,
    UpdateSkillsComponent,
    AddCourseComponent,
    CourseListComponent,
    UpdateCourseComponent,
    AddRegistrationComponent,
    UpdateRegistrationComponent,
    RegistrationListComponent,
    AddReviewsComponent,
    ReviewsListComponent,
    UpdateReviewsComponent,
    
    AddSocialmediaComponent,
    SocialmediaListComponent,
    UpdateSocialmediaComponent,
    AddCvComponent,
    CvListComponent,
    UpdateCvComponent,
    AddEnrollmentComponent,
    EnrollmentListComponent,
    UpdateEnrollmentComponent,
    AddApplicantComponent,
    ApplicantListComponent,
    UpdateApplicantComponent,
    AddApplicationtrackerComponent,
    ApplicationtrackerListComponent,
    UpdateApplicationtrackerComponent,

    EmployerListComponent,
    UpdateEmployerComponent,
    AddEmployerComponent,
    AddJobComponent,
    JobListComponent,
    UpdateJobComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    OTPComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
    ForgotmailComponent,
   
    UserComponent,
    UserdetailComponent,
    SelectRoleComponent,
    VendorDetailComponent,
    PurchasePlanComponent,
   
    RoleComponent,
    TopTrainPlanComponent,
    TopTrainPlanListComponent,
    PurchasePlanListComponent,
    UpdatePurchasePlanListComponent,
    UpdateTopTrainPlanComponent,
    DropdownComponent,
    VendorDashboardComponent,
    EndUserDashboardComponent,
    VendorListComponent,
    EndUserListComponent,
    DescriptionPipe,
    EndUserJobListComponent,
    AppliedJobListComponent,
  
    AppliedCourseListComponent,
       AddUserSkillComponent,
       UserSkillListComponent,
       UpdateUserSkillComponent,
       NewDropDownComponent,
       DropDownWithAPIComponent,
       AssignRoleComponent,
       UserDashboardComponent,
       VendorDashboardNewComponent,
       
       AddUserEducationComponent,
       AddAchievementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
   ReactiveFormsModule
    
  ],
 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1089927070008-aqfos8m7qh8ogb40bpff910l9ca7h9tk.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
