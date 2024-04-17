import { Component, OnInit } from '@angular/core';
import { CV } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.scss']
})
export class UpdateCvComponent implements OnInit {
  cV:CV;
  // aboutlist  : any[];
  CVId: any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.cV = new CV();

      this.route.params.subscribe((params) => {
        this.CVId = params['CVId'];
  
        this.service.GetCVById(this.CVId).subscribe((result) => {
       
          this.cV = result;
          console.log(this.cV);
  
        });
      });
    }


    OnSubmit(){
      // debugger;
            console.log(this.cV);
            this.service.UpdateCV(this.cV).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                const formData = new FormData();
                this.cV.CVPDF = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.cV.CVPDF);
                this.service.SaveCVImage(formData,result).subscribe(data => {
                 
                  alert('Saved Successfully.');
                });         
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
