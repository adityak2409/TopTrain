import { Component, OnInit } from '@angular/core';
import { Instructor } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.scss']
})
export class UpdateInstructorComponent implements OnInit {
  InstructorId:any
  instructor:Instructor

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.instructor = new Instructor();
     
      this.route.params.subscribe((params) => {
        this.InstructorId = params['InstructorId'];
        console.log("this.InstructorId",this.InstructorId)
        this.service.GetInstructorById(this.InstructorId).subscribe((result) => {
          
          this.instructor = result;
          console.log("instructor",this.instructor);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.instructor);
            
            this.service.UpdateInstructor(this.instructor).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.instructor.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveinstructorImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
