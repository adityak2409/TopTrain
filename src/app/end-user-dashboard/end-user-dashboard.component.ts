import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Job, Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-end-user-dashboard',
  templateUrl: './end-user-dashboard.component.html',
  styleUrls: ['./end-user-dashboard.component.scss']
})
export class EndUserDashboardComponent {
  sidebarOpen = false;
  job:Job
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  JobList:any[];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.JobList=[]

      this.job=new Job
    }

  OnProfile(){
    
  }
  OnAppliedJob(){
     
  }
  OnAppliedCourse(){
    
  }
}
