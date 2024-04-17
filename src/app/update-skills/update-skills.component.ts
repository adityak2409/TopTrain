import { Component, OnInit } from '@angular/core';
import { Skills } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.scss']
})
export class UpdateSkillsComponent implements OnInit {
  SKillsId:any
  skills:Skills

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.skills = new Skills();
     
      this.route.params.subscribe((params) => {
        this.SKillsId = params['SKillsId'];
        console.log("this.SKillsId",this.SKillsId)
        this.service.GetSKillsById(this.SKillsId).subscribe((result) => {
          
          this.skills = result;
          console.log("skills",this.skills);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.skills);
            
            this.service.UpdateSKills(this.skills).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.skills.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SaveskillsImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}

