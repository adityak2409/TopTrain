import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-enrollment',
  templateUrl: './add-enrollment.component.html',
  styleUrls: ['./add-enrollment.component.scss']
})
export class AddEnrollmentComponent implements OnInit {
  enrollment: Enrollment;
  enrollmentlist  : any[];
  RegistrationId:any


  constructor(private route: ActivatedRoute ,private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
      this.enrollment = new Enrollment();
      this.route.params.subscribe((params) => {
        debugger
        
         this.RegistrationId = params['RegistrationId'];
       this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
        console.log(" this.RegistrationId",this.RegistrationId)
      })
      this.enrollment.RegistrationId=this.RegistrationId
  
    this.enrollmentlist = [];
  }

  OnSubmit() {
    this.enrollment.Status="Active";
    console.log("prop", this.enrollment);
    this.service.AddEnrollment(this.enrollment).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  ngOnInit(): void {

  }
}
