import { Component, OnInit } from '@angular/core';
import { Registration } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.scss']
})
export class UpdateRegistrationComponent implements OnInit {
  RegistrationId:any
  registration:Registration

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.registration = new Registration();
     
      this.route.params.subscribe((params) => {
        this.RegistrationId = params['RegistrationId'];
        console.log("this.RegistrationId",this.RegistrationId)
        this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {
          
          this.registration = result;
          console.log("registration",this.registration);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.registration);
            
            this.service.UpdateRegistration(this.registration).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.registration.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveregistrationImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}