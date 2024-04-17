import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { Industry } from '../Class';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  SKillsList:any[];
industry:Industry
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.SKillsList=[]
   
  }


  Edit(SKillsId): void{
    try {
      this.router.navigateByUrl("/update-skills/"+SKillsId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(SKillsId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteSKills(SKillsId).subscribe(result => {
      if (result == "Success") {
      this.SKillsList = this.SKillsList.filter( 
        (item) => item.IndustryId != SKillsId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(SKillsId): void{
    try {
      this.router.navigateByUrl("/ViewSKillsList/" + SKillsId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllSKills().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.SKillsList.push(data);   
      }     
           console.log("SKillsList",this.SKillsList);
    });

  }
}
