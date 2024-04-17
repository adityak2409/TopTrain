import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { Employer, Job } from '../Class';

@Component({
  selector: 'app-end-user-job-list',
  templateUrl: './end-user-job-list.component.html',
  styleUrls: ['./end-user-job-list.component.scss']
})
export class EndUserJobListComponent {
  JobList:any[];
  job:Job
  employer:Employer
  JobId: any
  EmployerId:any
  JobmainList:any[]
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.JobList=[]
    this.JobmainList=[]
    this.job=new Job
    this.employer=new Employer
  }
  OnApplyJob(JobId): void{
   
      try {
        this.router.navigateByUrl("/add-applicant/"+JobId);
      } catch (error) {
        alert("certi-" + error);
      } 
    
  }

  
  toggleDescription(job: any) {
    job.showMore = !job.showMore;
  }
  
  ngOnInit(): void {
    this.employer.EmployerId=this.EmployerId
    this.service.GetAllJob().subscribe((result) => {
     
       console.log(result);
      for(let data of result){
          this.JobList.push(data);   
      }     
           console.log("JobList",this.JobList);
           
           
        //    this.JobmainList= this.JobList.filter(x => x.JobId==this.job.JobId);
                  
        //    // this.JobmainList= this.JobList.filter(x => x.UserDetailId==this.UserId);
        //    // console.log("Id",this.UserId)
        //     console.log("JobmainList",this.JobmainList);

        //    if(this.JobmainList.length==1){
           
        //     // this.openModal()
        //     const JobmainList = this.JobmainList[0]; // Get the first item from the filtered list
        //     this.JobId = JobmainList.JobId;
           
        //     localStorage.setItem('JID',this.JobId);
                
        //         console.log('jobid',result.JobId)
        //         alert('Saved Successfully.');
        //    //this.router.navigateByUrl("/app-userdetail/" + this.UserDetailId);
        //  }
         
         
        //  else{
        //        console.log("Something went wrong")
        //  }
           
           
            
    });

  }
}


