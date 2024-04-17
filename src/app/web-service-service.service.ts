import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from './Global';
import { Observable } from 'rxjs';
import { Industry,Instructor,EndUserPlan,Skills,Course,Registration,Reviews,SocialMedia,CV,Enrollment,Applicant,ApplicationTracker,Employer,Job, Login,UserDetail,VendorDetail,UserRole,Role,UserSKill, Country,Achievement,UserEducation} from './Class';

@Injectable({
  providedIn: 'root'
})
export class WebServiceServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
      "Content-Security-Policy": 'upgrade-insecure-requests'
    })
  };

  IsLogin: any;
  constructor(private http: HttpClient) {
    this.IsLogin = false;
  
  
   }

   AddIndustry(Industry): Observable<any> {
    return this.http.post<Industry>(GlobalVariable.SERVICE_API_URL +"Industry/AddIndustry",Industry, this.httpOptions);
  } 
   GetAllIndustry(): Observable<any> {
  return this.http.get<Industry>( GlobalVariable.SERVICE_API_URL +"Industry/GetAllIndustry" , this.httpOptions);
}
GetIndustryById(IndustryId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Industry/GetIndustryById?IndustryId="+IndustryId,this.httpOptions);
} 
UpdateIndustry(Industry): Observable<any> {
  return this.http.post<Industry>( GlobalVariable.SERVICE_API_URL +"Industry/UpdateIndustry?" , Industry,this.httpOptions);
}
DeleteIndustry(IndustryId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Industry/DeleteIndustry?IndustryId="+IndustryId,this.httpOptions);
}

//Instructor

AddInstructor(Instructor): Observable<any> {
  return this.http.post<Instructor>(GlobalVariable.SERVICE_API_URL +"Instructor/AddInstructor",Instructor, this.httpOptions);
} 
GetAllInstructor(): Observable<any> {
  return this.http.get<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/GetAllInstructor" , this.httpOptions);
} 
DeleteInstructor(InstructorId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Instructor/DeleteInstructor?InstructorId="+InstructorId,this.httpOptions);
}
GetInstructorById(InstructorId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Instructor/GetInstructorById?InstructorId="+InstructorId,this.httpOptions);
} 
UpdateInstructor(Instructor): Observable<any> {
  return this.http.post<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/UpdateInstructor?" , Instructor,this.httpOptions);
}

//EndUserPlan

AddEndUserPlan(EndUserPlan): Observable<any> {
  return this.http.post<EndUserPlan>(GlobalVariable.SERVICE_API_URL +"EndUserPlan/AddEndUserPlan",EndUserPlan, this.httpOptions);
}

  GetEndUserPlanById(EndUserPlanId:any): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"EndUserPlan/GetEndUserPlanById?EndUserPlanId="+EndUserPlanId,this.httpOptions);
  } 
  DeleteEndUserPlan(EndUserPlanId): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"EndUserPlan/DeleteEndUserPlan?EndUserPlanId="+EndUserPlanId,this.httpOptions);
  }
  GetAllEndUserPlan():Observable<any> {
    return this.http.get<EndUserPlan>( GlobalVariable.SERVICE_API_URL +"EndUserPlan/GetAllEndUserPlan" , this.httpOptions);
  } 
  UpdateEndUserPlan(EndUserPlan): Observable<any> {
    return this.http.post<EndUserPlan>( GlobalVariable.SERVICE_API_URL +"EndUserPlan/UpdateEndUserPlan?" , EndUserPlan,this.httpOptions);
  }
  SaveEndUserPlanImage(formdata,EndUserPlanId): Observable<any> {
    const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"EndUserPlan/SaveEndUserPlanImage?EndUserPlanId="+EndUserPlanId, formdata, null );
    return this.http.request(uploadReq);
  } 


  //Skills

AddSKills(Skills): Observable<any> {
  return this.http.post<Skills>(GlobalVariable.SERVICE_API_URL +"Skills/AddSKills",Skills, this.httpOptions);
}
DeleteSKills(SKillsId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"SKills/DeleteSKills?SKillsId="+SKillsId,this.httpOptions);
}
GetAllSKills():Observable<any> {
  return this.http.get<Skills>( GlobalVariable.SERVICE_API_URL +"Skills/GetAllSKills" , this.httpOptions);
} 
GetSKillsById(SKillsId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Skills/GetSKillsById?SKillsId="+SKillsId,this.httpOptions);
} 
UpdateSKills(Skills): Observable<any> {
  return this.http.post<EndUserPlan>( GlobalVariable.SERVICE_API_URL +"Skills/UpdateSKills?" , Skills,this.httpOptions);
}


////UserSKill
AddUserSKill(UserSKill): Observable<any> {
  return this.http.post<UserSKill>(GlobalVariable.SERVICE_API_URL +"UserSKill/AddUserSKill",UserSKill, this.httpOptions);
} 
GetAllUserSKill(): Observable<any> {
  return this.http.get<UserSKill>( GlobalVariable.SERVICE_API_URL +"UserSKill/GetAllUserSKill" , this.httpOptions);
} 
DeleteUserSKill(UserSKillId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserSKill/DeleteUserSKill?UserSKillId="+UserSKillId,this.httpOptions);
}
GetUserSKillById(UserSKillId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserSKill/GetUserSKillById?UserSKillId="+UserSKillId,this.httpOptions);
} 
UpdateUserSKill(UserSKill): Observable<any> {
  return this.http.post<UserSKill>( GlobalVariable.SERVICE_API_URL +"UserSKill/UpdateUserSKill?" , UserSKill,this.httpOptions);
}


SaveUserSKillImage(formdata,UserSKillId): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"UserSKill/SaveUserSKillImage?UserSKillId="+UserSKillId, formdata, null );
  return this.http.request(uploadReq);
} 


//Course


AddCourse(Course): Observable<any> {
  return this.http.post<Course>(GlobalVariable.SERVICE_API_URL +"Course/AddCourse",Course, this.httpOptions);
} 
GetAllCourse(): Observable<any> {
  return this.http.get<Course>( GlobalVariable.SERVICE_API_URL +"Course/GetAllCourse" , this.httpOptions);
} 
DeleteCourse(CourseId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Course/DeleteCourse?CourseId="+CourseId,this.httpOptions);
}
GetCourseById(CourseId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Course/GetCourseById?CourseId="+CourseId,this.httpOptions);
} 
UpdateCourse(Course): Observable<any> {
  return this.http.post<Course>( GlobalVariable.SERVICE_API_URL +"Course/UpdateCourse?" , Course,this.httpOptions);
}

//LoginModule
//Registration


AddRegistration(Registration): Observable<any> {
  return this.http.post<Registration>(GlobalVariable.SERVICE_API_URL +"Registration/AddRegistration",Registration, this.httpOptions);
} 
GetAllRegistration(): Observable<any> {
  return this.http.get<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration" , this.httpOptions);
} 
DeleteRegistration(RegistrationId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Registration/DeleteRegistration?RegistrationId="+RegistrationId,this.httpOptions);
}
GetRegistrationById(RegistrationId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?RegistrationId="+RegistrationId,this.httpOptions);
} 
UpdateRegistration(Registration): Observable<any> {
  return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration?" , Registration,this.httpOptions);
}

SendOTPEmail(Email){
  return this.http.post<any>(GlobalVariable.SERVICE_API_URL +"Registration/SendOTPEmail?Email="+Email,this.httpOptions);
      }
AddUserDetails(Registration): Observable<any> {
  return this.http.post<Registration>(GlobalVariable.SERVICE_API_URL +"Registration/AddRegistration",Registration, this.httpOptions);
} 
SaveUserDetailsImage(formdata,CVId): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"CV/SaveCVImage?CVId="+CVId, formdata, null );
  return this.http.request(uploadReq);
} 

GetRegistrationByEmail(Email){
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationByEmail?Email="+Email,this.httpOptions);
      }



//UserDetail



AddUserDetail(UserDetail): Observable<any> {
  return this.http.post<UserDetail>(GlobalVariable.SERVICE_API_URL +"UserDetail/AddUserDetail",UserDetail, this.httpOptions);
} 
GetAllUserDetail(): Observable<any> {
  return this.http.get<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetAllUserDetail" , this.httpOptions);
} 
DeleteUserDetail(UserDetailId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/DeleteUserDetail?UserDetailId="+UserDetailId,this.httpOptions);
}
GetUserDetailById(UserDetailId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDetail/GetUserDetailById?UserDetailId="+UserDetailId,this.httpOptions);
} 
UpdateUserDetail(UserDetail): Observable<any> {
  return this.http.post<UserDetail>( GlobalVariable.SERVICE_API_URL +"UserDetail/UpdateUserDetail?" , UserDetail,this.httpOptions);
}


SaveUserDetailImage(formdata,UserDetailId): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"UserDetail/SaveUserDetailImage?UserDetailId="+UserDetailId, formdata, null );
  return this.http.request(uploadReq);
} 


//VendorDetail
AddVendorDetail(VendorDetail): Observable<any> {
  return this.http.post<VendorDetail>(GlobalVariable.SERVICE_API_URL +"VendorDetail/AddVendorDetail",VendorDetail, this.httpOptions);
} 
GetAllVendorDetail(): Observable<any> {
  return this.http.get<VendorDetail>( GlobalVariable.SERVICE_API_URL +"VendorDetail/GetAllVendorDetail" , this.httpOptions);
} 
DeleteVendorDetail(VendorDetailId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"VendorDetail/DeleteVendorDetail?VendorDetailId="+VendorDetailId,this.httpOptions);
}
GetVendorDetailById(VendorDetailId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"VendorDetail/GetVendorDetailById?VendorDetailId="+VendorDetailId,this.httpOptions);
} 
UpdateVendorDetail(VendorDetail): Observable<any> {
  return this.http.post<VendorDetail>( GlobalVariable.SERVICE_API_URL +"VendorDetail/UpdateVendorDetail?" , VendorDetail,this.httpOptions);
}


SaveVendorDetailImage(formdata,VendorDetailId): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"VendorDetail/SaveVendorDetailImage?VendorDetailId="+VendorDetailId, formdata, null );
  return this.http.request(uploadReq);
} 

//Reviews

AddReviews(Reviews): Observable<any> {
  return this.http.post<Reviews>(GlobalVariable.SERVICE_API_URL +"Reviews/AddReviews",Reviews, this.httpOptions);
} 
GetAllReviews(): Observable<any> {
  return this.http.get<Reviews>( GlobalVariable.SERVICE_API_URL +"Reviews/GetAllReviews" , this.httpOptions);
} 
DeleteReviews(ReviewsId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Reviews/DeleteReviews?ReviewsId="+ReviewsId,this.httpOptions);
}
GetReviewsById(ReviewsId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Reviews/GetReviewsById?ReviewsId="+ReviewsId,this.httpOptions);
} 
UpdateReviews(Reviews): Observable<any> {
  return this.http.post<Reviews>( GlobalVariable.SERVICE_API_URL +"Reviews/UpdateReviews?" , Reviews,this.httpOptions);
}


//SocialMedia

AddSocialMedia(SocialMedia): Observable<any> {
  return this.http.post<SocialMedia>(GlobalVariable.SERVICE_API_URL +"SocialMedia/AddSocialMedia",SocialMedia, this.httpOptions);
} 
GetAllSocialMedia(): Observable<any> {
  return this.http.get<SocialMedia>( GlobalVariable.SERVICE_API_URL +"SocialMedia/GetAllSocialMedia" , this.httpOptions);
} 
DeleteSocialMedia(SocialMediaId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"SocialMedia/DeleteSocialMedia?SocialMediaId="+SocialMediaId,this.httpOptions);
}
GetSocialMediaById(SocialMediaId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"SocialMedia/GetSocialMediaById?SocialMediaId="+SocialMediaId,this.httpOptions);
} 
UpdateSocialMedia(SocialMedia): Observable<any> {
  return this.http.post<SocialMedia>( GlobalVariable.SERVICE_API_URL +"SocialMedia/UpdateSocialMedia?" , SocialMedia,this.httpOptions);
}


//CV

AddCV(CV): Observable<any> {
  return this.http.post<CV>(GlobalVariable.SERVICE_API_URL +"CV/AddCV",CV, this.httpOptions);
} 
GetAllCV(): Observable<any> {
  return this.http.get<CV>( GlobalVariable.SERVICE_API_URL +"CV/GetAllCV" , this.httpOptions);
} 
DeleteCV(CVId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"CV/DeleteCV?CVId="+CVId,this.httpOptions);
}
GetCVById(CVId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CV/GetCVById?CVId="+CVId,this.httpOptions);
} 
UpdateCV(CV): Observable<any> {
  return this.http.post<CV>( GlobalVariable.SERVICE_API_URL +"CV/UpdateCV?" , CV,this.httpOptions);
}
SaveCVImage(formdata,CVId): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"CV/SaveCVImage?CVId="+CVId, formdata, null );
  return this.http.request(uploadReq);
} 


//Enrollment

AddEnrollment(Enrollment): Observable<any> {
  return this.http.post<Enrollment>(GlobalVariable.SERVICE_API_URL +"Enrollment/AddEnrollment",Enrollment, this.httpOptions);
} 
GetAllEnrollment(): Observable<any> {
  return this.http.get<Enrollment>( GlobalVariable.SERVICE_API_URL +"Enrollment/GetAllEnrollment" , this.httpOptions);
} 
DeleteEnrollment(EnrollmentId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Enrollment/DeleteEnrollment?EnrollmentId="+EnrollmentId,this.httpOptions);
}
GetEnrollmentById(EnrollmentId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Enrollment/GetEnrollmentById?EnrollmentId="+EnrollmentId,this.httpOptions);
} 
UpdateEnrollment(Enrollment): Observable<any> {
  return this.http.post<Enrollment>( GlobalVariable.SERVICE_API_URL +"Enrollment/UpdateEnrollment?" , Enrollment,this.httpOptions);
}

//Applicant

AddApplicant(Applicant): Observable<any> {
  return this.http.post<Applicant>(GlobalVariable.SERVICE_API_URL +"Applicant/AddApplicant",Applicant, this.httpOptions);
} 
GetAllApplicant(): Observable<any> {
  return this.http.get<Applicant>( GlobalVariable.SERVICE_API_URL +"Applicant/GetAllApplicant" , this.httpOptions);
} 
DeleteApplicant(ApplicantId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Applicant/DeleteApplicant?ApplicantId="+ApplicantId,this.httpOptions);
}
GetApplicantById(ApplicantId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Applicant/GetApplicantById?ApplicantId="+ApplicantId,this.httpOptions);
} 
UpdateApplicant(Applicant): Observable<any> {
  return this.http.post<Applicant>( GlobalVariable.SERVICE_API_URL +"Applicant/UpdateApplicant?" , Applicant,this.httpOptions);
}


//ApplicationTracker

AddApplicationTracker(ApplicationTracker): Observable<any> {
  return this.http.post<ApplicationTracker>(GlobalVariable.SERVICE_API_URL +"ApplicationTracker/AddApplicationTracker",ApplicationTracker, this.httpOptions);
} 
GetAllApplicationTracker(): Observable<any> {
  return this.http.get<ApplicationTracker>( GlobalVariable.SERVICE_API_URL +"ApplicationTracker/GetAllApplicationTracker" , this.httpOptions);
} 
DeleteApplicationTracker(ApplicationTrackerId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ApplicationTracker/DeleteApplicationTracker?ApplicationTrackerId="+ApplicationTrackerId,this.httpOptions);
}
GetApplicationTrackerById(ApplicationTrackerId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationTracker/GetApplicationTrackerById?ApplicationTrackerId="+ApplicationTrackerId,this.httpOptions);
} 
UpdateApplicationTracker(ApplicationTracker): Observable<any> {
  return this.http.post<ApplicationTracker>( GlobalVariable.SERVICE_API_URL +"ApplicationTracker/UpdateApplicationTracker?" , ApplicationTracker,this.httpOptions);
}


//Employer

AddEmployer(Employer): Observable<any> {
  return this.http.post<Employer>(GlobalVariable.SERVICE_API_URL +"Employer/AddEmployer",Employer, this.httpOptions);
} 
GetAllEmployer(): Observable<any> {
  return this.http.get<Employer>( GlobalVariable.SERVICE_API_URL +"Employer/GetAllEmployer" , this.httpOptions);
} 
DeleteEmployer(EmployerId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Employer/DeleteEmployer?EmployerId="+EmployerId,this.httpOptions);
}
GetEmployerById(EmployerId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Employer/GetEmployerById?EmployerId="+EmployerId,this.httpOptions);
} 
UpdateEmployer(Employer): Observable<any> {
  return this.http.post<Employer>( GlobalVariable.SERVICE_API_URL +"Employer/UpdateEmployer?" , Employer,this.httpOptions);
}

//Job

AddJob(Job): Observable<any> {
  return this.http.post<Job>(GlobalVariable.SERVICE_API_URL +"Job/AddJob",Job, this.httpOptions);
} 
GetAllJob(): Observable<any> {
  return this.http.get<Job>( GlobalVariable.SERVICE_API_URL +"Job/GetAllJob" , this.httpOptions);
} 
DeleteJob(JobId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Job/DeleteJob?JobId="+JobId,this.httpOptions);
}
GetJobById(JobId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Job/GetJobById?JobId="+JobId,this.httpOptions);
} 
UpdateJob(Job): Observable<any> {
  return this.http.post<Job>( GlobalVariable.SERVICE_API_URL +"Job/UpdateJob?" , Job,this.httpOptions);
}

Login(Email,Password): Observable<any> {
  return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?Email="+Email+"&Password="+Password);
}


//UserRole
AddUserRole(UserRole): Observable<any> {
  return this.http.post<UserRole>(GlobalVariable.SERVICE_API_URL +"UserRole/AddUserRole",UserRole, this.httpOptions);
} 
GetAllUserRole(): Observable<any> {
  return this.http.get<UserRole>( GlobalVariable.SERVICE_API_URL +"UserRole/GetAllUserRole" , this.httpOptions);
} 
DeleteUserRole(UserRoleId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserRole/DeleteUserRole?UserRoleId="+UserRoleId,this.httpOptions);
}
GetUserRoleById(UserRoleId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserRole/GetUserRoleById?UserRoleId="+UserRoleId,this.httpOptions);
} 
UpdateUserRole(UserRole): Observable<any> {
  return this.http.post<UserRole>( GlobalVariable.SERVICE_API_URL +"UserRole/UpdateUserRole?" , UserRole,this.httpOptions);
}


//Role
AddRole(Role): Observable<any> {
  return this.http.post<Role>(GlobalVariable.SERVICE_API_URL +"Role/AddRole",Role, this.httpOptions);
} 
GetAllRole(): Observable<any> {
  return this.http.get<Role>( GlobalVariable.SERVICE_API_URL +"Role/GetAllRole" , this.httpOptions);
} 
DeleteRole(RoleId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Role/DeleteRole?RoleId="+RoleId,this.httpOptions);
}
GetRoleById(RoleId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Role/GetRoleById?RoleId="+RoleId,this.httpOptions);
} 
UpdateRole(Role): Observable<any> {
  return this.http.post<Role>( GlobalVariable.SERVICE_API_URL +"Role/UpdateRole?" , Role,this.httpOptions);
}


//DropDown
GetAllCountries(): Observable<any> {
  return this.http.get<Country>( GlobalVariable.SERVICE_API_URL +"Country/GetAllCountries" , this.httpOptions);
} 


//Achievement
AddAchievement(Achievement): Observable<any> {
  return this.http.post<Achievement>(GlobalVariable.SERVICE_API_URL +"Achievement/AddAchievement",Achievement, this.httpOptions);
} 
GetAllAchievement(): Observable<any> {
  return this.http.get<Achievement>( GlobalVariable.SERVICE_API_URL +"Achievement/GetAllAchievement" , this.httpOptions);
} 
DeleteAchievement(AchievementId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Achievement/DeleteAchievement?AchievementId="+AchievementId,this.httpOptions);
}
GetAchievementById(AchievementId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Achievement/GetAchievementById?AchievementId="+AchievementId,this.httpOptions);
} 
UpdateAchievement(Achievement): Observable<any> {
  return this.http.post<Achievement>( GlobalVariable.SERVICE_API_URL +"Achievement/UpdateAchievement?" , Achievement,this.httpOptions);
}


//UserEducation
AddUserEducation(UserEducation): Observable<any> {
  return this.http.post<UserEducation>(GlobalVariable.SERVICE_API_URL +"UserEducation/AddUserEducation",UserEducation, this.httpOptions);
} 
GetAllUserEducation(): Observable<any> {
  return this.http.get<UserEducation>( GlobalVariable.SERVICE_API_URL +"UserEducation/GetAllUserEducation" , this.httpOptions);
} 
DeleteUserEducation(UserEducationId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserEducation/DeleteUserEducation?UserEducationId="+UserEducationId,this.httpOptions);
}
GetUserEducationById(UserEducationId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserEducation/GetUserEducationById?UserEducationId="+UserEducationId,this.httpOptions);
} 
UpdateUserEducation(UserEducation): Observable<any> {
  return this.http.post<UserEducation>( GlobalVariable.SERVICE_API_URL +"UserEducation/UpdateUserEducation?" , UserEducation,this.httpOptions);
}


}
