import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  registration: Registration;

  mainList: any;
  demo: any;
  RegistrationId: any;
  confirmPassword: any
  newPassword:any


  constructor(private router: Router, private http: HttpClient,
    private service: WebServiceServiceService, private route: ActivatedRoute,) {

    this.registration = new Registration();

    this.mainList = [];
    this.demo = 0;
    // this.confirmPassword = ""

    this.route.params.subscribe((params) => {
      debugger
      this.RegistrationId = params['RegistrationId'];
      console.log("addclient", this.RegistrationId)

      this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {

        this.registration = result;
        console.log("this.registration", this.registration);

      });

    });

  }

  OnSubmit() {
    console.log(this.newPassword, "this.newPassword")
    console.log(this.confirmPassword, "this.confirmPassword")
    if (this.newPassword == this.confirmPassword) {
      console.log("final", this.registration)
      this.registration.Password=this.newPassword
      this.service.UpdateRegistration(this.registration).subscribe((result) => {
        console.log("hhh", result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Saved Successfully.');
          this.router.navigate(['/app-login']);
        }
      });
    } else {
      alert("password not match")
    }

  }

}