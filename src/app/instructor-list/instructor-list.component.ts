import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  InstructorList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.InstructorList=[]
  }


  Edit(InstructorId): void{
    try {
      this.router.navigateByUrl("/update-instructor/"+InstructorId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(InstructorId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteInstructor(InstructorId).subscribe(result => {
      if (result == "Success") {
      this.InstructorList = this.InstructorList.filter( 
        (item) => item.IndustryId != InstructorId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(InstructorId): void{
    try {
      this.router.navigateByUrl("/ViewInstructorList/" + InstructorId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllInstructor().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.InstructorList.push(data);   
      }     
           console.log("InstructorList",this.InstructorList);
    });

  }
}

