import { Component, OnInit } from '@angular/core';
import { CV } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {
  cV: CV;
  cVlist  : any[];
  RegistrationId:any
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,private route:ActivatedRoute
    ) {

        
      this.cV = new CV();
      this.cVlist = [];

      this.route.params.subscribe((params) => {

        this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
        

        console.log("RegistrationId",this.RegistrationId)
    
    });
    this.cV.RegistrationId = this.RegistrationId;

   
  }

  OnSubmit() {
    this.cV.Status="Active"
    console.log("prop", this.cV);
    this.service.AddCV(this.cV).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.cV.CVPDF = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.cV.CVPDF);
        this.service.SaveCVImage(formData,result).subscribe(data => {
         
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
        this.cV.CVPDF = this.filesToUpload[i].name;
    } 
    }
  ngOnInit(): void {

  }
}