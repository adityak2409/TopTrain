import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration, UserDetail, UserRole } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registration: Registration
  searchText1: any
  searchText2: any
  mainlist: any[] = []
  registrationList: any[] = []
  emailStatus: any
  registrationId: any
  defaultRole: any
  userid: any
  user: any
  loggedIn: any
  newId:any
  userRole: UserRole
  constructor(private authService: SocialAuthService, private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
     
      

      
      this.registration = new Registration();
      this.userRole = new UserRole();
    }
  
  
  
    OnSubmit() {
      console.log("registration", this.registration);
  
      this.service.GetAllRegistration().subscribe((result) => {
        this.mainlist = []
        this.registrationList = []
        for (let data of result) {
          this.registrationList.push(data);
        }
        this.mainlist = this.registrationList.filter(x => x.Email == this.searchText1);
        console.log("this.mainlist.length on s", this.mainlist.length);
        if (this.mainlist.length == 1) {
          this.emailStatus = this.mainlist[0].EmailStatus;
          this.registrationId = this.mainlist[0].RegistrationId;
          this.defaultRole = this.mainlist[0].DefaultRole;
          console.log("this.emailStatus", this.emailStatus);
  
          //check EmailStatus
          if (this.emailStatus == "Active") {
            this.service.Login(this.searchText1, this.searchText2).subscribe((result) => {
              if (result.RegistrationId == 0) {
                alert('Invalid Email or Password.');
              }
              else {
                localStorage.setItem('SID', result.RegistrationId);
                alert("Login Successfully");
  
                if (this.defaultRole == "2") {
                  this.router.navigateByUrl("/app-user-dashboard");
                } else {
                  this.router.navigateByUrl("/app-vendor-dashboard-new");
                }
  
  
              }
            })
          }
          else {
            alert("Please Activate Your mail First.")
            this.router.navigateByUrl("/VerifyEmail/" + this.registrationId);
          }
  
  
        }
        else {
          alert("Please Signup first")
        }
  
      })
    }
  
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log("this.user", this.user)
  
        this.service.GetAllRegistration().subscribe((result) => {
          this.mainlist = []
          this.registrationList = []
          for (let data of result) {
            this.registrationList.push(data);
          }
          this.mainlist = this.registrationList.filter(x => x.Email == this.user.email);
  
  
          if (this.mainlist.length == 0) {
            //mail not exist then Add new record
            this.registration.FName = this.user.firstName
            this.registration.LName = this.user.lastName
  
            this.registration.Email = this.user.email
            this.registration.OTPNo = ""
            this.registration.Password = ""
            this.registration.EmailStatus = "Active"
            this.registration.Status = "Active"
            this.registration.DefaultRole="2"
  
            this.service.AddRegistration(this.registration).subscribe((result) => {
              if (result > 0) {
                alert('Signup Successfully.');
  
                   //Add Default user Role as a EndUser
              this.userRole.RegistrationId=result
              this.userRole.RoleId=2
              this.userRole.Status="Active"
              this.service.AddUserRole(this.userRole).subscribe((result) => {
                if (result > 0) {
                  alert('add user Role Successfully.');
                  this.router.navigateByUrl("/app-user-dashboard");
  
                }
                else {
                  alert("Something went wrong! Please try again.")
                }
              });
  
              }
              else {
                alert("Something went wrong! Please try again.")
              }
            });
          }
          else {
            
            
            this.service.GetRegistrationByEmail(this.user.email).subscribe((result) => {
              this.registration = result; 
              this.newId = this.registration.RegistrationId
              localStorage.setItem('SID', this.newId);
              this.userid = JSON.parse(localStorage.getItem('SID'));
              console.log( "userid", this.userid);
              if (this.userid == 0) {
                alert("Something went wrong! Please try again.");
              }
              else {
                alert("User registred alredy ");
  
                if (this.registration.DefaultRole == '2') {
                  this.router.navigateByUrl("/app-user-dashboard");
                } else {
                  this.router.navigateByUrl("/VendorDashboard");
                }
  
              }
            })
  
  
  
          }
        })
  
      });
    }
  
  
  
  
  
  }
  