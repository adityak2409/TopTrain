import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { Employer } from '../Class';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {
  EmployerList:any[];
  employer:Employer
  EmployerId:any
  EID:any
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.EmployerList=[]
    this.employer=new Employer();
  }


  // Edit(EmployerId): void{
  //   try {
  //     this.router.navigateByUrl("/app-applied-job-list/"+EmployerId);
  //   } catch (error) {
  //     alert("certi-" + error);
  //   } 
  // }

  Delete(EmployerId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteEmployer(EmployerId).subscribe(result => {
      if (result == "Success") {
      this.EmployerList = this.EmployerList.filter( 
        (item) => item.IndustryId != EmployerId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(EmployerId): void{
    try {
      this.router.navigateByUrl("/ViewEmployerList/" + EmployerId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllEmployer().subscribe((result) => {
      
       console.log(result);
      for(let data of result){
          this.EmployerList.push(data);   
      } 
        
      
           console.log("EmployerList",this.EmployerList);
    });

  }
}


