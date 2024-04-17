import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';
import { CV } from '../Class';
import { GlobalVariable } from '../Global';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  pdfPath: string = GlobalVariable.BASE_API_URL;
  
  CVList:any[]
  constructor(private service:WebServiceServiceService,
    private router: Router,  private http: HttpClient) {
    this.CVList=[];
   }
  
 
   Delete(CVId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteCV(CVId).subscribe(result => {
      if (result == "Success") {
      this.CVList = this.CVList.filter(
        (item) => item.CVId != CVId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(CVId): void{
    try {
      this.router.navigateByUrl("/update-cv/" + CVId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(CVId): void{
    try {
      this.router.navigateByUrl("/ViewCVList/" + CVId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllCV().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.CVList.push(data);   
      }     
           console.log(this.CVList);
    });
  }
  }
  
