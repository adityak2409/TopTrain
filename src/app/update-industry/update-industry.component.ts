import { Component, OnInit } from '@angular/core';
import { Industry } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-industry',
  templateUrl: './update-industry.component.html',
  styleUrls: ['./update-industry.component.scss']
})
export class UpdateIndustryComponent implements OnInit {
  IndustryId:any
  industry:Industry

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.industry = new Industry();
     
      this.route.params.subscribe((params) => {
        this.IndustryId = params['IndustryId'];
        console.log("this.IndustryId",this.IndustryId)
        this.service.GetIndustryById(this.IndustryId).subscribe((result) => {
          
          this.industry = result;
          console.log("industry",this.industry);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.industry);
            
            this.service.UpdateIndustry(this.industry).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.industry.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveindustryImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
