import { Component, OnInit } from '@angular/core';
import { Employer } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent implements OnInit {
  RId:any
  RegistrationId:any
  employer: Employer;

  employerlist  : any[];



  constructor(private route: ActivatedRoute,private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.employer = new Employer();
    this.employerlist = [];
    this.route.params.subscribe((params) => {
      debugger
            this.RId = JSON.parse(localStorage.getItem('SID'));
            console.log("RegistrationId",this.RId)
            this.RegistrationId = this.RId;
            console.log("RegistrationId",this.RegistrationId)
          });
          
          this.employer.RegistrationId=this.RId
  }

  OnSubmit() {

    this.employer.Status="Active"
    console.log("prop", this.employer);
    this.service.AddEmployer(this.employer).subscribe((result) => {
    
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
