import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-socialmedia',
  templateUrl: './add-socialmedia.component.html',
  styleUrls: ['./add-socialmedia.component.scss']
})
export class AddSocialmediaComponent implements OnInit {
  socialMedia: SocialMedia;
  socialMedialist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.socialMedia = new SocialMedia();
    this.socialMedialist = [];
  }

  // OnSubmit() {
  //   console.log("prop", this.socialMedia);
  //   this.service.AddSocialMedia(this.socialMedia).subscribe((result) => {
  //     if (result > 0) {
  //       alert('Saved Successfully.');
  //     }
  //     else {
  //       alert("Something went wrong! Please try again.")
  //     }
  //   });

  // }
  ngOnInit(): void {
     
  }
}

