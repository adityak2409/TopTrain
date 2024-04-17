import { Component, OnInit } from '@angular/core';
import { EndUserPlan } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-enduserplan',
  templateUrl: './add-enduserplan.component.html',
  styleUrls: ['./add-enduserplan.component.scss']
})
export class AddEnduserplanComponent implements OnInit {
  endUserPlan: EndUserPlan;
  endUserPlanlist  : any[];

  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.endUserPlan = new EndUserPlan();
    this.endUserPlanlist = [];
  }

  OnSubmit() {
    console.log("prop", this.endUserPlan);
    this.service.AddEndUserPlan(this.endUserPlan).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.endUserPlan.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.endUserPlan.Photo);
        this.service.SaveEndUserPlanImage(formData,result).subscribe(data => {
         
          alert('Saved Successfully.');
        });       
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.endUserPlan.Photo = this.filesToUpload[i].name;
    } 
    }
  ngOnInit(): void {

  }
}
