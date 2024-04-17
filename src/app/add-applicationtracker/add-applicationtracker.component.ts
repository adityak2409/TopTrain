import { Component, OnInit } from '@angular/core';
import { ApplicationTracker } from '../Class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-applicationtracker',
  templateUrl: './add-applicationtracker.component.html',
  styleUrls: ['./add-applicationtracker.component.scss']
})
export class AddApplicationtrackerComponent implements OnInit {
  applicationTracker: ApplicationTracker;
  applicationTrackerlist  : any[];



  constructor(private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {
    this.applicationTracker = new ApplicationTracker();
    this.applicationTrackerlist = [];
  }

  OnSubmit() {
    this.applicationTracker.Status="Active"
    console.log("prop", this.applicationTracker);
    this.service.AddApplicationTracker(this.applicationTracker).subscribe((result) => {
      if (result > 0) {
        alert('Saved Successfully.');
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  ngOnInit(): void {

  }
}
