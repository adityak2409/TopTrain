export class Industry{
    IndustryId : number;
    Title: string;
    Description: string;
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}
export class Instructor{
    InstructorId : number;
    Name: string;
    Bio: string;
    Email: string;
    Contact: string;
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class EndUserPlan{
    EndUserPlanId : number;
    Title: string;
    Description: string;
    Price: string;
    Photo: string;
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Skills{
    Industry:Industry
    SKillsId : number;
    IndustryId : number;
    Title: string;
    Description: string;
    Price: string;
    CertificateStatus: string;
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}
export class UserSKill{
    Skills:Skills
    UserSKillId : number;
    SkillId : number;
    RegistrationId : number;
    Certificate: string;
 
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}



export class Course{
    CourseId : number;
    InstructorId : number;
    Title: string;
    Description: string;
    StartDate:string;
    EndDate :string;
    Price: string;
    Status: string;
    Instructor:Instructor

    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}
//LoginModule
export class Registration{
    
    RegistrationId : number;
    
    FName: string;
    LName: string;
    Email:string;
    Password :string;
    EmailStatus :string;
    OTPNo: string;
    DefaultRole:string;
    Status: string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}
export class Login{
    Email:string;
    Password:string;
}

export class UserDetail{
    UserDetailId:number;
    RegistrationId:number;
    EndUserPlanId:number;
    ProfileTagLine: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    ContactNo: string;
    CountryId:number;
    StateId:number;
    CityId:number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
 
}

export class VendorDetail{
    VendorDetailId:number;
    RegistrationId:number;
   
    ProfileTagLine: string;
    Photo: string;
    BirthDate: string;
    Address: string;
    ContactNo: string;
    CountryId:number;
    StateId:number;
    CityId:number;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}



export class Reviews{
    ReviewsId : number;
    RegistrationId : number;
    CourseId : number;
    Rating: string;
    Comment: string;
   
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}


export class SocialMedia{
    SocialMediaId : number;
    RegistrationId : number;
    Facebook: string;
    Instagram: string;
    LinkedIn:string;
    Twitter :string;
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class CV{
    CVId : number;
    RegistrationId : number;
    CVPDF: string;
    Status : string;

    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Enrollment{
    EnrollmentId : number;
    RegistrationId : number;
    CourseId : number;
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Applicant{
    CV:CV;
    ApplicantId : number;
    RegistrationId : number;
    JobId : number;
    CVId : number;
    Status: string;
    
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class ApplicationTracker{
    ApplicationTrackerId : number;
    ApplicantId : number;
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Employer{
    EmployerId : number;

    RegistrationId : number;
    CompanyName: string;
    Industry: string;
    Email: string;
    Contact: string;
    Status : string;
    
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Job{
    employer:Employer
    JobId : number;
    EmployerId : number;
    Title: string;
    JobType: string;
    Description:string;
    Requirements :string;
    Location :string;
    Salary :string;
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}export class UserRole{
  
    UserRoleId : number;
    RegistrationId : number;
    RoleId : number;
    
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Role{
  
    RoleId : number;
    // RegistrationId : number;
    // RoleId : number;
    Title: string;
    Description: string;
    Status: string;
   
    CreatedBy : string;
    CreatedDate: string;
    UpdatedBy : string;
    UpdatedDate: string;

}

export class Country{
  
    CountryId  : number;
   
    Name: string;
}

export class State{
    StateId  : number;
    CountryId  : number;
   
    Name: string;
}

export class City{
    CityId   : number;
    StateId   : number;
   
    Name: string;
}


export class UserEducation {
    UserEducationId: number;
    RegistrationId: number;
    Title: string;
    Description: string;
    University: string;
    College: string;
    Status: string;

    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


export class Achievement {
    AchievementId: number;
    RegistrationId: number;
    Title: string;
    Description: string;
    CertificateId: number;
    Status: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
}


