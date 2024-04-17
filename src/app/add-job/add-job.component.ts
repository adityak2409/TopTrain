import { Component, OnInit } from '@angular/core';
import { Employer, Job } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  job: Job;
  joblist  : any[];
  employer:Employer;
  EmployerList:any[];
  
 
  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.job = new Job();
    this.job.employer = new Employer();
      this.joblist = [];
      this.EmployerList = [];
      this.GetAllEmployer();
  }

  OnSubmit() {
    this.job.Status="Active"
    console.log("prop", this.job);
    this.service.AddJob(this.job).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  GetAllEmployer() {
    debugger;
    this.service.GetAllEmployer().subscribe((result) => {
     console.log("es",result);
     for(let data of result){
         this.EmployerList.push(data);   
     }     
          console.log("servicelist"+this.EmployerList);
   });
 }
  ngOnInit(): void {

  }
}

