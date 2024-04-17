import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  RegistrationList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.RegistrationList=[]
  }


  Edit(RegistrationId): void{
    try {
      this.router.navigateByUrl("/update-registration/"+RegistrationId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(RegistrationId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteRegistration(RegistrationId).subscribe(result => {
      
      if (result == "Success") {
      this.RegistrationList = this.RegistrationList.filter( 
        (item) => item.RegistrationId != RegistrationId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(RegistrationId): void{
    try {
      this.router.navigateByUrl("/ViewRegistrationList/" + RegistrationId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllRegistration().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.RegistrationList.push(data);   
      }     
           console.log("RegistrationList",this.RegistrationList);
    });

  }
}
