import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-industry-list',
  templateUrl: './industry-list.component.html',
  styleUrls: ['./industry-list.component.scss']
})
export class IndustryListComponent implements OnInit {
  IndustryList:any[];
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.IndustryList=[]
  }


  Edit(IndustryId): void{
    try {
      this.router.navigateByUrl("/update-industry/"+IndustryId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(IndustryId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteIndustry(IndustryId).subscribe(result => {
      if (result == "Success") {
      this.IndustryList = this.IndustryList.filter( 
        (item) => item.IndustryId != IndustryId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(IndustryId): void{
    try {
      this.router.navigateByUrl("/ViewIndustryList/" + IndustryId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllIndustry().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.IndustryList.push(data);   
      }     
           console.log("IndustryList",this.IndustryList);
    });

  }
}
