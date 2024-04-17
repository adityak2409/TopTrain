import { Component, OnInit } from '@angular/core';
import { Applicant, CV, Job } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.scss']
})
export class AddApplicantComponent implements OnInit {
  applicant:Applicant;
  applicantlist  : any[];
  CV:CV;
  job:Job
  RegistrationId:any
  JobId:any
 CVList:any[];
  constructor( private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
      this.applicant = new Applicant();
      this.applicant.CV = new CV();
      this.job=new Job();
      this.applicantlist = [];
      this.CVList = [];

      this.GetAllCV();
    
  
      this.route.params.subscribe((params) => {
        debugger
        
         this.RegistrationId = params['RegistrationId'];
       this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
        console.log(" this.RegistrationId",this.RegistrationId)

        this.route.params.subscribe((params) => {
          this.JobId = params['JobId'];
          console.log("this.JobId",this.JobId)
       
        });
      });
      this.applicant.RegistrationId=this.RegistrationId      
      this.applicant.JobId=this.JobId
     }

     OnSubmit() {
      this.applicant.Status="Active"
      console.log("prop",this.applicant);
     this.service.AddApplicant(this.applicant).subscribe((result) => {
       if (result > 0) {

           alert('Saved Successfully.');       
       }
       else {
         alert("Something went wrong! Please try again.")
       }
     });
    
    }
    GetAllCV() {
      debugger;
      this.service.GetAllCV().subscribe((result) => {
       console.log("es",result);
       for(let data of result){
           this.CVList.push(data);   
       }     
            console.log("servicelist"+this.CVList);
     });
   }
  ngOnInit(): void {

  }

}
