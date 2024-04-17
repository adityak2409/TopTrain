import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {
  ReviewsList:any[];

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceServiceService) { 
    this.ReviewsList=[]
  }


  Edit(ReviewsId): void{
    try {
      this.router.navigateByUrl("/update-reviews/"+ReviewsId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  Delete(ReviewsId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteReviews(ReviewsId).subscribe(result => {
      if (result == "Success") {
      this.ReviewsList = this.ReviewsList.filter( 
        (item) => item.ReviewsId != ReviewsId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  View(ReviewsId): void{
    try {
      this.router.navigateByUrl("/ViewReviewsList/" + ReviewsId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }

  
  ngOnInit(): void {
    this.service.GetAllReviews().subscribe((result) => {
       console.log(result);
      for(let data of result){
          this.ReviewsList.push(data);   
      }     
           console.log("ReviewsList",this.ReviewsList);
    });

  }
}

