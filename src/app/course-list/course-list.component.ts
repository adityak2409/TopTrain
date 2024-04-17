import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  CourseList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.CourseList=[]
  }


  Edit(CourseId): void{
    try {
      this.router.navigateByUrl("/update-course/"+CourseId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(CourseId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteCourse(CourseId).subscribe(result => {
      if (result == "Success") {
      this.CourseList = this.CourseList.filter( 
        (item) => item.IndustryId != CourseId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(CourseId): void{
    try {
      this.router.navigateByUrl("/ViewCourseList/" + CourseId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllCourse().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.CourseList.push(data);   
      }     
           console.log("CourseList",this.CourseList);
    });

  }
}

