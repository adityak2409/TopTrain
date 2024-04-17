import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-socialmedia-list',
  templateUrl: './socialmedia-list.component.html',
  styleUrls: ['./socialmedia-list.component.scss']
})
export class SocialmediaListComponent implements OnInit {
  SocialMediaList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.SocialMediaList=[]
  }


  Edit(SocialMediaId): void{
    try {
      this.router.navigateByUrl("/update-socialmedia/"+SocialMediaId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(SocialMediaId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteSocialMedia(SocialMediaId).subscribe(result => {
      if (result == "Success") {
      this.SocialMediaList = this.SocialMediaList.filter( 
        (item) => item.SocialMediaId != SocialMediaId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(SocialMediaId): void{
    try {
      this.router.navigateByUrl("/ViewSocialMediaList/" + SocialMediaId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllSocialMedia().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.SocialMediaList.push(data);   
      }     
           console.log("SocialMediaList",this.SocialMediaList);
    });

  }
}

