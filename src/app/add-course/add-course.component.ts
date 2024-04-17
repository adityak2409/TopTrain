import { Component, OnInit } from '@angular/core';
import { Course, Instructor } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  course:Course;
  courselist  : any[];
  Instructor:Instructor;
 InstructorList:any[];
  constructor( private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) {
      this.course = new Course();
      this.course.Instructor = new Instructor();
      this.courselist = [];
      this.InstructorList = [];
      this.GetAllInstructor();
     }

     OnSubmit() {
      this.course.Status="Active"
      console.log("prop",this.course);
     this.service.AddCourse(this.course).subscribe((result) => {
       if (result > 0) {

           alert('Saved Successfully.');       
       }
       else {
         alert("Something went wrong! Please try again.")
       }
     });
    
    }
    GetAllInstructor() {
      debugger;
      this.service.GetAllInstructor().subscribe((result) => {
       console.log("es",result);
       for(let data of result){
           this.InstructorList.push(data);   
       }     
            console.log("servicelist"+this.InstructorList);
     });
   }
  ngOnInit(): void {
  }

}
