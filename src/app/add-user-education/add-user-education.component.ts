import { Component, OnInit } from '@angular/core';
import { UserEducation } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-user-education',
  templateUrl: './add-user-education.component.html',
  styleUrls: ['./add-user-education.component.scss']
})
export class AddUserEducationComponent implements OnInit {
  userEducation: UserEducation;
  userEducationlist  : any[];
  RegistrationId:any


  constructor(private route: ActivatedRoute, private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.userEducation = new UserEducation();
    this.userEducationlist = [];


    this.route.params.subscribe((params) => {

      this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
      

      console.log("RegistrationId",this.RegistrationId)
  
  });
  this.userEducation.RegistrationId = this.RegistrationId;

  }

  OnSubmit() {
    this.userEducation.Status="Active"
    console.log("prop", this.userEducation);
    this.service.AddUserEducation(this.userEducation).subscribe((result) => {
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

