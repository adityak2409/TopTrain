import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {
ApplicantList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.ApplicantList=[]
  }


  Edit(ApplicantId): void{
    try {
      this.router.navigateByUrl("/update-applicant/"+ApplicantId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(ApplicantId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteApplicant(ApplicantId).subscribe(result => {
      if (result == "Success") {
      this.ApplicantList = this.ApplicantList.filter( 
        (item) => item.ApplicantId != ApplicantId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(ApplicantId): void{
    try {
      this.router.navigateByUrl("/ViewApplicantList/" + ApplicantId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllApplicant().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.ApplicantList.push(data);   
      }     
           console.log("ApplicantList",this.ApplicantList);
    });

  }
}

