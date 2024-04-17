import { Component, OnInit } from '@angular/core';
import { Employer } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.scss']
})
export class UpdateEmployerComponent implements OnInit {
  EmployerId:any
  VId:any
  employer:Employer

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.employer = new Employer();
      this.route.params.subscribe((params) => {
        debugger
              this.VId = JSON.parse(localStorage.getItem('VendorId'));
              console.log("VendorId",this.VId)
             
            });
  
     
      this.route.params.subscribe((params) => {
        this.EmployerId = params['EmployerId'];
        console.log("this.EmployerId",this.EmployerId)
        this.service.GetEmployerById(this.EmployerId).subscribe((result) => {
          
          this.employer = result;
          console.log("employer",this.employer);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.employer);
            
            this.service.UpdateEmployer(this.employer).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.employer.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveemployerImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
