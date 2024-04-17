import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { Reviews } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();
  reviews: Reviews;
  reviewslist  : any[];
  RegistrationId:any


  constructor(private route: ActivatedRoute ,private service: WebServiceServiceService,private router: Router,
    private http: HttpClient,
    ) {

      this.reviews = new Reviews();

      this.route.params.subscribe((params) => {
        debugger
        
         this.RegistrationId = params['RegistrationId'];
       this.RegistrationId = JSON.parse(localStorage.getItem('SID'));
        console.log(" this.RegistrationId",this.RegistrationId)

      
       
        });
        this.reviews.RegistrationId=this.RegistrationId
   
    this.reviewslist = [];
  }

  rate(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }

  OnSubmit() {
    this.reviews.Status = "Active"
    console.log("prop", this.reviews);
    this.service.AddReviews(this.reviews).subscribe((result) => {
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
