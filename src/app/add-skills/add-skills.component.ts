import { Component, OnInit } from '@angular/core';
import { Industry, Skills } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.scss']
})
export class AddSkillsComponent implements OnInit {
  skills: Skills;
  skillslist  : any[];
 Industry:Industry;
 IndustryList:any[];

  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.skills = new Skills();
    this.skills.Industry=new Industry();
  
  
    this.skillslist = [];
    this.GetAllIndustry();
    this.IndustryList = [];
  }

  OnSubmit() {
    this.skills.Status="Active"
    console.log("prop", this.skills);
    this.service.AddSKills(this.skills).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }

  GetAllIndustry() {
    debugger;
    this.service.GetAllIndustry().subscribe((result) => {
     console.log("es",result);
     for(let data of result){
         this.IndustryList.push(data);   
     }     
          console.log("servicelist"+this.IndustryList);
   });
 }
  ngOnInit(): void {

  }
}
