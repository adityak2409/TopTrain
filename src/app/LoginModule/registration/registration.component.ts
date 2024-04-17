import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration, UserRole } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RId:any
  userRole:UserRole
  isChecked: boolean = true;
  registration: Registration
  RegistrationId: any;
  filesToUpload: Array<File>;
  Emailid: any
  regisid: any
  selectedFileNames: string[] = [];
  registrationList: any[]
  mainlist: any[]
  mainlist1: any[]
  constructor(private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
      // this.route.params.subscribe((params) => {
      //   debugger
      //         this.regisid = JSON.parse(localStorage.getItem('SID'));
      //         console.log("RegistrationId",this.regisid)
             
      //       });
        
    this.registration = new Registration();
    this.userRole = new UserRole();
    this.registrationList = []
    this.mainlist = []
    this.mainlist1 = []
 

    }
  OnSubmit() {
  


    this.service.GetAllRegistration().subscribe((result) => {
      // console.log(result);
      
      for (let data of result) {
        this.registrationList.push(data);
      }
      this.mainlist = this.registrationList.filter(x => x.Email == this.registration.Email);
      console.log("this.mainlist.length", this.mainlist.length);
      if (this.mainlist.length == 1) {
        alert('This email registered allready');
      }
      else {
        
        this.Emailid = this.registration.Email
        this.registration.EmailStatus = "InActive"
        this.registration.OTPNo = ""
        this.registration.Status = ""
        this.service.AddRegistration(this.registration).subscribe((result) => {
          if (result > 0) {

            //  const formData = new FormData();
            //  this.Registration.Photo = this.filesToUpload[0].name;
            //  formData.append('uploadedImage',this.filesToUpload[0],this.Registration.Photo);
            //  this.service.SaveUserLoginImage(formData,result).subscribe(data => {

            


            this.userRole.Status="Active"
            this.userRole.RoleId=2;
            this.userRole.RegistrationId=result
            console.log("RegistrationId", this.RegistrationId);
            console.log("userRole", this.userRole); 
             this.service.AddUserRole(this.userRole).subscribe((result) => {
              console.log("result",result)
        
                 
                
               
                        if (this.RegistrationId == 0) {
                          alert("Something went wrong")
                        }
                        else {
                         
                          alert("User Registered Successfully");
                          //  this.router.navigateByUrl("/app-userdetail");
                         
                        }
            });
        

            
            this.SendOTPEmail()
            // this.router.navigateByUrl("/Login");
            debugger


            //  this.service.GetRegistrationByEmail(this.Emailid).subscribe((result) => {
            //   this.registration = result;
            //   console.log(this.registration)
            //   console.log(this.registration.RegistrationId)
            //   sendmail(this.registration.RegistrationId, this.registration.Email,this.registration.FName);
            // });



            //  });       
          }
          else {
            alert("Something went wrong! Please try again.")
          }
        });

      }
     
    })
    
   

  }
  // fileChangeEvent(fileInput: any){
  // this.filesToUpload = <Array<File>>fileInput.target.files;
  // this.selectedFileNames = [];
  // for (let i = 0; i < this.filesToUpload.length; i++)
  // {
  //     this.selectedFileNames.push(this.filesToUpload[i].name);
  //     this.Registration.Photo = this.filesToUpload[i].name;
  // } 
  // }

  SendOTPEmail() {
    this.service.SendOTPEmail(this.registration.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")

        console.log('Email sent successfully:', response);
        //this.router.navigate(['otp']);
        this.registration.OTPNo = response.otp;
        console.log('Received OTP:', this.registration.OTPNo);
        //this.storeotp();
        this.service.GetAllRegistration().subscribe((result) => {
          this.registrationList = result;
          this.mainlist1 = this.registrationList.filter(x => x.Email == this.registration.Email);

          for (let data1 of this.mainlist1) {
            this.RegistrationId = data1.RegistrationId;
            // this.sendVerificationEmail(this.demo);
          }
          debugger
          this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {
            this.registration = result;
            console.log("fun", this.registration);

            // Invoke OnSubmit here
            //this.OnUpdate();
            this.registration.OTPNo = response.otp;
            this.service.UpdateRegistration(this.registration).subscribe((result) => {
              if (result == 0) {
                alert('Not updated!');

              } else {
                alert('updated successfully');
                this.router.navigateByUrl("/app-verify-email/" + this.RegistrationId);

                //  this.router.navigate(['otp']);
              }
            });
          });
          
        });
      }
    });
  }


  ngOnInit(): void {
  }

}