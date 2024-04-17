import { Component, OnInit } from '@angular/core';
import { Job } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.scss']
})
export class UpdateJobComponent implements OnInit {
  JobId:any
  job:Job

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.job = new Job();
     
      this.route.params.subscribe((params) => {
        this.JobId = params['JobId'];
        console.log("this.JobId",this.JobId)
        this.service.GetJobById(this.JobId).subscribe((result) => {
          
          this.job = result;
          console.log("job",this.job);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.job);
            
            this.service.UpdateJob(this.job).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.job.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavejobImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
