import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-enrollment',
  templateUrl: './update-enrollment.component.html',
  styleUrls: ['./update-enrollment.component.scss']
})
export class UpdateEnrollmentComponent implements OnInit {
  EnrollmentId:any
  enrollment:Enrollment

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.enrollment = new Enrollment();
     
      this.route.params.subscribe((params) => {
        this.EnrollmentId = params['EnrollmentId'];
        console.log("this.EnrollmentId",this.EnrollmentId)
        this.service.GetEnrollmentById(this.EnrollmentId).subscribe((result) => {
          
          this.enrollment = result;
          console.log("enrollment",this.enrollment);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.enrollment);
            
            this.service.UpdateEnrollment(this.enrollment).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.enrollment.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveenrollmentImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}


