import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration, UserDetail, UserRole } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent {
  userRoleList:any[]=[]
  userRole: UserRole
  mainUserRoleList:any[]=[]
  constructor(private authService: SocialAuthService, private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
      this.userRole = new UserRole();
      this.GetAllUserRole()
    }
    GetAllUserRole(){
      this.service.GetAllUserRole().subscribe((result) => {
        this.userRoleList = []
        for (let data of result) {
          this.userRoleList.push(data);
        }
        this.mainUserRoleList = this.userRoleList.filter((item) => item.Status == "InActive");
      })
    }

    Accept(UserRoleId){
      this.service.GetUserRoleById(UserRoleId).subscribe((result) => {

        this.userRole = result;
        console.log(this.userRole);
  
        this.userRole.Status = "Active"
        this.service.UpdateUserRole(this.userRole).subscribe((result) => {
          console.log("hhh", result);
          if (result == 0) {
            alert("Something went wrong! Please try again.");
          } else {
            alert('Saved Successfully.');
            // this.mainUserRoleList = this.userRoleList.filter((item) => item.UserRoleId !== UserRoleId);
            this.GetAllUserRole()
          }
        });
      });
    }


    Delete(UserRoleId) {
      if (confirm('Are you sure you want to delete?')) {
        this.service.DeleteUserRole(UserRoleId).subscribe(result => {
          if (result == "Success") {
            this.userRoleList = this.userRoleList.filter(
              (item) => item.UserRoleId != UserRoleId);
            alert("Deleted Successfully");
            this.GetAllUserRole()
          } else {
            alert("Something went wrong! Please try again.");
          }
        });
      }
    }
}

