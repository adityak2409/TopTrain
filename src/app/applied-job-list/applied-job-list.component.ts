import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { Applicant } from '../Class';

@Component({
  selector: 'app-applied-job-list',
  templateUrl: './applied-job-list.component.html',
  styleUrls: ['./applied-job-list.component.scss']
})
export class AppliedJobListComponent {
applicant:Applicant
ApplicantList:any[]
constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
  this.ApplicantList=[]
  this.applicant=new Applicant
}
ngOnInit(): void {
this.service.GetAllApplicant().subscribe((result) => {
     
  console.log(result);
 for(let data of result){
     this.ApplicantList.push(data);   
 }     
      console.log("ApplicantList",this.ApplicantList);
});
}
}
