import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-applicationtracker-list',
  templateUrl: './applicationtracker-list.component.html',
  styleUrls: ['./applicationtracker-list.component.scss']
})
export class ApplicationtrackerListComponent implements OnInit {
  ApplicationTrackerList:any[];
  
    constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
      this.ApplicationTrackerList=[]
    }
  
  
    Edit(ApplicationTrackerId): void{
      try {
        this.router.navigateByUrl("/update-applicationtracker/"+ApplicationTrackerId);
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    Delete(ApplicationTrackerId) {
      alert('Are you sure you want to delete?');
      this.service.DeleteApplicationTracker(ApplicationTrackerId).subscribe(result => {
        if (result == "Success") {
        this.ApplicationTrackerList = this.ApplicationTrackerList.filter( 
          (item) => item.ApplicationTrackerId != ApplicationTrackerId);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
    View(ApplicationTrackerId): void{
      try {
        this.router.navigateByUrl("/ViewApplicationTrackerList/" + ApplicationTrackerId,{skipLocationChange:true});
      } catch (error) {
        alert("certi-" + error);
      } 
    }
  
    
    ngOnInit(): void {
      this.service.GetAllApplicationTracker().subscribe((result) => {
         console.log(result);
        for(let data of result){
            this.ApplicationTrackerList.push(data);   
        }     
             console.log("ApplicationTrackerList",this.ApplicationTrackerList);
      });
  
    }
  }
  
  