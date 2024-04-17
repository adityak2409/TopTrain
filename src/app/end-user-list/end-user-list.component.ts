import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Job, Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-end-user-list',
  templateUrl: './end-user-list.component.html',
  styleUrls: ['./end-user-list.component.scss']
})
export class EndUserListComponent {
  job:Job
  appliedJobs:any[];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) {
      this.appliedJobs=[]

      this.job=new Job();
    } 

    OnAppliedJob(){
      this.service.GetAllJob().subscribe((result) => {
        console.log(result);
       for(let data of result){
           this.appliedJobs.push(data);   
       }     
            console.log("JobList",this.appliedJobs);
     });
    }
}
