import { Component, OnInit } from '@angular/core';
import { Course } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  CourseId:any
  course:Course

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.course = new Course();
     
      this.route.params.subscribe((params) => {
        this.CourseId = params['CourseId'];
        console.log("this.CourseId",this.CourseId)
        this.service.GetCourseById(this.CourseId).subscribe((result) => {
          
          this.course = result;
          console.log("course",this.course);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.course);
            
            this.service.UpdateCourse(this.course).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.course.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavecourseImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
