import { Component, OnInit } from '@angular/core';
import { ApplicationTracker } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-applicationtracker',
  templateUrl: './update-applicationtracker.component.html',
  styleUrls: ['./update-applicationtracker.component.scss']
})
export class UpdateApplicationtrackerComponent implements OnInit {
  ApplicationTrackerId:any
  applicationTracker:ApplicationTracker

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.applicationTracker = new ApplicationTracker();
     
      this.route.params.subscribe((params) => {
        this.ApplicationTrackerId = params['ApplicationTrackerId'];
        console.log("this.ApplicationTrackerId",this.ApplicationTrackerId)
        this.service.GetApplicationTrackerById(this.ApplicationTrackerId).subscribe((result) => {
          
          this.applicationTracker = result;
          console.log("applicationTracker",this.applicationTracker);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.applicationTracker);
            
            this.service.UpdateApplicationTracker(this.applicationTracker).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.applicationTracker.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveapplicationTrackerImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}



