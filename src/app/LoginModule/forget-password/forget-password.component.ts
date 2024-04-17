import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  registrationlist: any[]
  mainlist: any[]
  mainlist1:any[]
  registration: Registration;
  RegistrationId:any

  constructor(private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) {
    this.registration = new Registration();
    this.registrationlist = []
    this.mainlist = []
    this.mainlist1=[]
   
  }
  OnSubmit() {
    this.registrationlist = []
    this.service.GetAllRegistration().subscribe((result) => {
      console.log(result);
      debugger
      for (let data of result) {
        this.registrationlist.push(data);
      }
      console.log("registration", this.registrationlist); //Email

      this.mainlist = this.registrationlist.filter(x => x.Email == this.registration.Email);
      console.log("e1", this.mainlist);

      if (this.mainlist.length == 1) {
        alert('Email RegistrationId Existed');
        this.SendOTPEmail()
      }

      else {
        alert("Invalid Email RegistrationId");

      }
    });

  }


  SendOTPEmail() {
    this.registrationlist = []
    this.mainlist = []
    this.mainlist1=[]
    this.service.SendOTPEmail(this.registration.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")

        console.log('Email sent successfully:', response);
        //this.router.navigate(['otp']);
        this.registration.OTPNo = response.otp;
        console.log('Received OTP:', this.registration.OTPNo);
        //this.storeotp();
        this.service.GetAllRegistration().subscribe((result) => {
          this.registrationlist = result;
          this.mainlist1 = this.registrationlist.filter(x => x.Email == this.registration.Email);

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
                this.router.navigateByUrl("/app-otp/" + this.RegistrationId);

                
              }
            });
          });
        });
      }
    });
  }


}