import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { Course } from '../Class';

@Component({
  selector: 'app-applied-course-list',
  templateUrl: './applied-course-list.component.html',
  styleUrls: ['./applied-course-list.component.scss']
})
export class AppliedCourseListComponent {
  course:Course
  CourseList:any[]
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.CourseList=[]
    this.course=new Course
  }
  ngOnInit(): void {
  this.service.GetAllApplicant().subscribe((result) => {
       
    console.log(result);
   for(let data of result){
       this.CourseList.push(data);   
   }     
        console.log("CourseList",this.CourseList);
  });
  }
  }
  