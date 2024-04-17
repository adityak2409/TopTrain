import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { UpdateIndustryComponent } from './update-industry/update-industry.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';
import { EnduserplanListComponent } from './enduserplan-list/enduserplan-list.component';
import { AddEnduserplanComponent } from './add-enduserplan/add-enduserplan.component';
import { UpdateEnduserplanComponent } from './update-enduserplan/update-enduserplan.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddRegistrationComponent } from './add-registration/add-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';
import { AddReviewsComponent } from './add-reviews/add-reviews.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { UpdateReviewsComponent } from './update-reviews/update-reviews.component';
import { AddSocialmediaComponent } from './add-socialmedia/add-socialmedia.component';
import { SocialmediaListComponent } from './socialmedia-list/socialmedia-list.component';
import { UpdateSocialmediaComponent } from './update-socialmedia/update-socialmedia.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AddEnrollmentComponent } from './add-enrollment/add-enrollment.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { UpdateEnrollmentComponent } from './update-enrollment/update-enrollment.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { AddApplicationtrackerComponent } from './add-applicationtracker/add-applicationtracker.component';
import { ApplicationtrackerListComponent } from './applicationtracker-list/applicationtracker-list.component';
import { UpdateApplicationtrackerComponent } from './update-applicationtracker/update-applicationtracker.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { LoginComponent } from './LoginModule/login/login.component';
import { ForgetPasswordComponent } from './LoginModule/forget-password/forget-password.component';
import { VerifyEmailComponent } from './LoginModule/verify-email/verify-email.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { OTPComponent } from './LoginModule/otp/otp.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './LoginModule/userdetail/userdetail.component';
import { SelectRoleComponent } from './select-role/select-role.component';
import { VendorDetailComponent } from './LoginModule/vendor-detail/vendor-detail.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { EndUserDashboardComponent } from './end-user-dashboard/end-user-dashboard.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { EndUserListComponent } from './end-user-list/end-user-list.component';
import { EndUserJobListComponent } from './end-user-job-list/end-user-job-list.component';
import { AppliedJobListComponent } from './applied-job-list/applied-job-list.component';
import { AppliedCourseListComponent } from './applied-course-list/applied-course-list.component';
import { AddUserSkillComponent } from './add-user-skill/add-user-skill.component';
import { NewDropDownComponent } from './new-drop-down/new-drop-down.component';
import { DropDownWithAPIComponent } from './drop-down-with-api/drop-down-with-api.component';
import { AssignRoleComponent } from './LoginModule/assign-role/assign-role.component';
import { UserDashboardComponent } from './LoginModule/user-dashboard/user-dashboard.component';
import { VendorDashboardNewComponent } from './LoginModule/vendor-dashboard-new/vendor-dashboard-new.component';
import { AddAchievementComponent } from './add-achievement/add-achievement.component';
import { AddUserEducationComponent } from './add-user-education/add-user-education.component';

const routes: Routes = [
  {path:'add-industry',component:AddIndustryComponent},
  {path:'industry-list',component:IndustryListComponent},
 // { path: '',   redirectTo: '/industry-list', pathMatch: 'full' },
  {path:'update-industry/:IndustryId',component:UpdateIndustryComponent},

  {path:'add-instructor',component:AddInstructorComponent},
  {path:'instructor-list',component:InstructorListComponent},
  {path:'update-instructor/:InstructorId',component:UpdateInstructorComponent},

  {path:'add-enduserplan',component:AddEnduserplanComponent},
  {path:'enduserplan-list',component:EnduserplanListComponent},
  {path:'update-enduserplan/:EndUserPlanId',component:UpdateEnduserplanComponent},

  {path:'add-skills',component:AddSkillsComponent},
  {path:'skills-list',component:SkillsListComponent},
  {path:'update-skills/:SKillsId',component:UpdateSkillsComponent},

  {path:'add-course',component:AddCourseComponent},
  {path:'course-list',component:CourseListComponent},
  {path:'update-course/:CourseId',component:UpdateCourseComponent},

  {path:'add-registration',component:AddRegistrationComponent},
  {path:'registration-list',component:RegistrationListComponent},
  {path:'update-registration/:RegistrationId',component:UpdateRegistrationComponent},

  {path:'add-reviews',component:AddReviewsComponent},
  {path:'reviews-list',component:ReviewsListComponent},
  {path:'update-reviews/:ReviewsId',component:UpdateReviewsComponent},

  {path:'add-socialmedia',component:AddSocialmediaComponent},
  {path:'socialmedia-list',component:SocialmediaListComponent},
  {path:'update-socialmedia/:SocialMediaId',component:UpdateSocialmediaComponent},
  {path:'app-vendor-list',component:VendorListComponent},
  {path:' app-end-user-list',component:EndUserListComponent},
 
  

  
  {path:'add-cv',component:AddCvComponent},
  {path:'cv-list',component:CvListComponent},
  {path:'update-cv/:CVId',component:UpdateCvComponent},

  {path:'add-enrollment',component:AddEnrollmentComponent},
  {path:'enrollment-list',component:EnrollmentListComponent},
  {path:'update-enrollment/:EnrollmentId',component:UpdateEnrollmentComponent},


  {path:'add-applicant',component:AddApplicantComponent},
  {path:'add-applicant/:JobId',component:AddApplicantComponent},
  
  {path:'applicant-list',component:ApplicantListComponent},
  {path:'update-applicant/:ApplicantId',component:UpdateApplicantComponent},

  {path:'add-applicationtracker',component:AddApplicationtrackerComponent},
  {path:'applicationtracker-list',component:ApplicationtrackerListComponent},
  {path:'update-applicationtracker/:ApplicationTrackerId',component:UpdateApplicationtrackerComponent},

  {path:'add-employer',component:AddEmployerComponent},
  {path:'app-employer-list',component:EmployerListComponent},
  {path:'update-employer/:EmployerId',component:UpdateEmployerComponent},

  {path:'add-job',component:AddJobComponent},
  {path:'job-list',component:JobListComponent},
  {path:'update-job/:JobId',component:UpdateJobComponent},
  
  {path:'app-registration',component:RegistrationComponent},
  {path:'',component:LoginComponent},
  {path:'app-login',component:LoginComponent},
  {path:'app-forget-password',component:ForgetPasswordComponent},
  {path:'app-verify-email/:RegistrationId',component:VerifyEmailComponent},
  {path:'app-reset-password/:RegistrationId',component:ResetPasswordComponent},
  {path:'app-otp/:RegistrationId',component:OTPComponent},
 
  {path:'app-assign-role',component:AssignRoleComponent},
  {path:'app-user-dashboard',component:UserDashboardComponent},
  {path:'app-vendor-dashboard-new',component:VendorDashboardNewComponent},
  {path:'app-userdetail',component:UserdetailComponent},
  {path:'app-userdetail/:UserDetailId',component:UserdetailComponent},
  {path:'app-userdetail/:userid',component:UserdetailComponent},
  {path:'app-select-role',component:SelectRoleComponent},
  {path:'app-vendor-detail',component:VendorDetailComponent},
  {path:'app-vendor-detail/:VendorDetailId',component:VendorDetailComponent},
  {path:'app-dropdown',component:DropdownComponent},
 
  {path:"app-vendor-dashboard",component:VendorDashboardComponent},
  {path:"app-end-user-dashboard",component:EndUserDashboardComponent},
  
  {path:"app-end-user-job-list",component:EndUserJobListComponent},

  {path:"app-applied-job-list",component:AppliedJobListComponent},
  {path:"app-applied-course-list",component:AppliedCourseListComponent},
  {path:"app-applied-course-list",component:AppliedCourseListComponent},
  {path:"app-add-user-skill",component:AddUserSkillComponent},
  {path:"app-new-drop-down",component:NewDropDownComponent},
  {path:"app-drop-down-with-api",component:DropDownWithAPIComponent},

  {path:"app-add-achievement",component:AddAchievementComponent},
  {path:"app-add-user-education",component:AddUserEducationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
