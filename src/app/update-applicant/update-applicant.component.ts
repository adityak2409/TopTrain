import { Component, OnInit } from '@angular/core';
import { Applicant } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.scss']
})
export class UpdateApplicantComponent implements OnInit {
  ApplicantId:any
  applicant:Applicant

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.applicant = new Applicant();
     
      this.route.params.subscribe((params) => {
        this.ApplicantId = params['ApplicantId'];
        console.log("this.ApplicantId",this.ApplicantId)
        this.service.GetApplicantById(this.ApplicantId).subscribe((result) => {
          
          this.applicant = result;
          console.log("applicant",this.applicant);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.applicant);
            
            this.service.UpdateApplicant(this.applicant).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.applicant.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveapplicantImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}



