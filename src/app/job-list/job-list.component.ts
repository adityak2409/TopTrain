import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
 JobList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.JobList=[]
  }


  Edit(JobId): void{
    try {
      this.router.navigateByUrl("/update-job/"+JobId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(JobId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteJob(JobId).subscribe(result => {
      if (result == "Success") {
      this.JobList = this.JobList.filter( 
        (item) => item.JobId !=JobId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(JobId): void{
    try {
      this.router.navigateByUrl("/ViewJobList/" +JobId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  toggleDescription(job: any) {
    job.showMore = !job.showMore;
  }
  
  ngOnInit(): void {
    
    this.service.GetAllJob().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.JobList.push(data);   
      }     
           console.log("JobList",this.JobList);
    });

  }
}

