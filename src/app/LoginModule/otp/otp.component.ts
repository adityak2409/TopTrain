
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;

   RegistrationId: any;
   registration: Registration;
   Registrationlist: any[];
   showPassword: boolean;
   mainList: any[];
   searchText: any;
   otp1: any;
   otp2: any;
   otp3: any;
   otp4: any;
   otp5: any;
   otp6: any;

   constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: WebServiceServiceService) {
    this.registration = new Registration();
    this.Registrationlist = [];
    this.mainList=[]
   // this.RegistrationId =0

    this.route.params.subscribe((params) => {
      debugger
      
       this.RegistrationId = params['RegistrationId'];
     //  this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
      console.log(" this.RegistrationId",this.RegistrationId)
    });
            
  }
  moveToNext(currentInput: any, nextInput: any): void {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  OnSubmit1(){
    debugger
  // this.Registration.OTPNo = this.otp;
  // this.generateOTP();
  this.Registrationlist=[]
  this.mainList=[]
   
  this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {
      
   this.registration = result;
   if(this.registration.OTPNo==this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6){
     alert("otp Matched")
     this.router.navigateByUrl("/app-reset-password/" + this.RegistrationId);

    //  this.registration.EmailStatus = "Active";
    //  this.service.UpdateRegistration(this.registration).subscribe((result) => {
    //    if (result == 0) {
    //      alert('Not updated!');

    //    } else {
    //     alert("Email activate Succesfully")
        
    //      this.router.navigateByUrl("/ResetPassword/" + this.RegistrationId);

    //    }
    //  });


     
    //  this.router.navigateByUrl("/ResetPassword/" + this.RegistrationId);
   }else{
     alert("otp not Matched")
   }
  

 });

}

}
