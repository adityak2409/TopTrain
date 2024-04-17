import { Component, OnInit } from '@angular/core';
import { Reviews } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-update-reviews',
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.scss']
})
export class UpdateReviewsComponent implements OnInit {
  ReviewsId:any
  reviews:Reviews

  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 

      this.reviews = new Reviews();
     
      this.route.params.subscribe((params) => {
        this.ReviewsId = params['ReviewsId'];
        console.log("this.ReviewsId",this.ReviewsId)
        this.service.GetReviewsById(this.ReviewsId).subscribe((result) => {
          
          this.reviews = result;
          console.log("reviews",this.reviews);
  
        });
      });


    }
    OnSubmit(){
     
            console.log(this.reviews);
            
            this.service.UpdateReviews(this.reviews).subscribe((result) => {

              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                // this.reviews.Photo = this.filesToUpload[0].name;
                // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                // this.service.SavereviewsImage(formData,result).subscribe(data => {
                 
                 alert('Saved Successfully.');
                // });         
             }
           
              
            });
          }

  ngOnInit(): void {
  }


}

