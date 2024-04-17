import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { EndUserPlan } from '../Class';
import { GlobalVariable } from '../Global';

@Component({
  selector: 'app-enduserplan-list',
  templateUrl: './enduserplan-list.component.html',
  styleUrls: ['./enduserplan-list.component.scss']
})
export class EnduserplanListComponent implements OnInit {
  imgPath: string = GlobalVariable.BASE_API_URL;
  EndUserPlanList:any[]
  constructor(private service:WebServiceServiceService,
    private router: Router,  private http: HttpClient) {
    this.EndUserPlanList=[];
   }
  
 
   Delete(EndUserPlanId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteEndUserPlan(EndUserPlanId).subscribe(result => {
      if (result == "Success") {
      this.EndUserPlanList = this.EndUserPlanList.filter(
        (item) => item.EndUserPlanId != EndUserPlanId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(EndUserPlanId): void{
    try {
      this.router.navigateByUrl("/update-enduserplan/" + EndUserPlanId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(EndUserPlanId): void{
    try {
      this.router.navigateByUrl("/ViewEndUserPlanList/" + EndUserPlanId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllEndUserPlan().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.EndUserPlanList.push(data);   
      }     
           console.log(this.EndUserPlanList);
    });
  }
  }
  
