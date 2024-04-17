import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';


@Component({
  selector: 'app-update-socialmedia',
  templateUrl: './update-socialmedia.component.html',
  styleUrls: ['./update-socialmedia.component.scss']
})
export class UpdateSocialmediaComponent implements OnInit {
  SocialMediaId:any
  socialMedia:SocialMedia

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.socialMedia = new SocialMedia();
     
      this.route.params.subscribe((params) => {
        this.SocialMediaId = params['SocialMediaId'];
        console.log("this.SocialMediaId",this.SocialMediaId)
        this.service.GetSocialMediaById(this.SocialMediaId).subscribe((result) => {
          
          this.socialMedia = result;
          console.log("socialMedia",this.socialMedia);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.socialMedia);
            
            this.service.UpdateSocialMedia(this.socialMedia).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.socialMedia.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavesocialMediaImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}
