import { Component, OnInit } from '@angular/core';
import { EndUserPlan } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-enduserplan',
  templateUrl: './update-enduserplan.component.html',
  styleUrls: ['./update-enduserplan.component.scss']
})
export class UpdateEnduserplanComponent  implements OnInit {
  endUserPlan:EndUserPlan;
  // aboutlist  : any[];
  EndUserPlanId: any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.endUserPlan = new EndUserPlan();

      this.route.params.subscribe((params) => {
        this.EndUserPlanId = params['EndUserPlanId'];
  
        this.service.GetEndUserPlanById(this.EndUserPlanId).subscribe((result) => {
       
          this.endUserPlan = result;
          console.log(this.endUserPlan);
  
        });
      });
    }


    OnSubmit(){
      debugger;
            console.log(this.endUserPlan);
            this.service.UpdateEndUserPlan(this.endUserPlan).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                const formData = new FormData();
                this.endUserPlan.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.endUserPlan.Photo);
                this.service.SaveEndUserPlanImage(formData,result).subscribe(data => {
                 
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
              this.endUserPlan.Photo = this.filesToUpload[i].name;
          } 
          }

  ngOnInit(): void {
  }

}
