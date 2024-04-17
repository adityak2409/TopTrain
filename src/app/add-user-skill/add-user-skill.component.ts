import { Component, OnInit } from '@angular/core';
import { Skills, UserSKill } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-user-skill',
  templateUrl: './add-user-skill.component.html',
  styleUrls: ['./add-user-skill.component.scss']
})
export class AddUserSkillComponent {
  userSkill: UserSKill;
  userSkilllist  : any[];
  Skills:Skills;
  SkillsList:any[];
  usid:any
  RegistrationId:any
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor( private route:ActivatedRoute, private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.userSkill = new UserSKill();
    this.userSkill.Skills=new Skills();
  


    this.route.params.subscribe((params) => {

      this.usid = JSON.parse(localStorage.getItem('SID'));
      

      console.log("usid",this.usid)
   this.RegistrationId = this.usid;
           
            console.log("RegistrationId",this.RegistrationId)
           
          });



  
    this.userSkilllist = [];
    this.GetAllSKills();
    this.SkillsList = [];
  }

  OnSubmit() {
    this.userSkill.Status="Active"
    console.log("prop", this.userSkill);
    this.service.AddUserSKill(this.userSkill).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.userSkill.Certificate = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.userSkill.Certificate);
        this.service.SaveUserSKillImage(formData,result).subscribe(data => {
         
          alert('Saved Successfully.');
        });       
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }

  GetAllSKills() {
    debugger;
    this.service.GetAllSKills().subscribe((result) => {
      this.userSkill.RegistrationId=this.usid
     console.log("es",result);
     for(let data of result){
         this.SkillsList.push(data);   
     }     
          console.log("servicelist"+this.SkillsList);
   });
 }


 fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;
  this.selectedFileNames = [];
  for (let i = 0; i < this.filesToUpload.length; i++)
  {
      this.selectedFileNames.push(this.filesToUpload[i].name);
      this.userSkill.Certificate = this.filesToUpload[i].name;
  }
  }


  ngOnInit(): void {

  }
}
