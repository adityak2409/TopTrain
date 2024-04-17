import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent implements OnInit {
  EnrollmentList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.EnrollmentList=[]
  }


  Edit(EnrollmentId): void{
    try {
      this.router.navigateByUrl("/update-enrollment/"+EnrollmentId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(EnrollmentId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteEnrollment(EnrollmentId).subscribe(result => {
      if (result == "Success") {
      this.EnrollmentList = this.EnrollmentList.filter( 
        (item) => item.EnrollmentId != EnrollmentId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(EnrollmentId): void{
    try {
      this.router.navigateByUrl("/ViewEnrollmentList/" + EnrollmentId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllEnrollment().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.EnrollmentList.push(data);   
      }     
           console.log("EnrollmentList",this.EnrollmentList);
    });

  }
}

