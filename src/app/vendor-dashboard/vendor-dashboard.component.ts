import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
    }
  postJob(){
    this.router.navigateByUrl("add-job")
  }

  postCourse(){
    this.router.navigateByUrl("add-course")
  }
  addEmployer(){
    this.router.navigateByUrl("add-employer")
  }
}
