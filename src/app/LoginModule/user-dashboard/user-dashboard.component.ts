import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration, UserDetail, UserRole } from 'src/app/Class';
import { WebServiceServiceService } from 'src/app/web-service-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  UId: any
  userRoleList: any[] = []
  roleList: any[] = []
  unmatchedRoles: any[] = []
  selectedRoles: number[] = [];
  unmatchedRoles1: any[] = [];
  matchedRoles:any[]=[]
  mn: any[] = []
  mainList:any[]=[]
  roleId:any
  userRole: UserRole
  registration: Registration;
  MId:any


  constructor(private authService: SocialAuthService, private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService,private route:ActivatedRoute) {
    //   this.userRole = new UserRole();
    //   this.registration = new Registration();
    // this.route.params.subscribe((params) => {
    //   this.UId = JSON.parse(localStorage.getItem('SID'));
    // });
    // this.service.GetRegistrationById(this.UId).subscribe((result) => {
    //   this.registration = result;
    //   console.log("fun", this.registration);
    // })

    // this.service.GetAllUserRole().subscribe((result) => {
    //   this.userRoleList = []
    //   for (let data of result) {
    //     this.userRoleList.push(data);
    //   }
    //   const userRoleIds: number[] = this.userRoleList.map(userRole => userRole.RoleId);
    //   this.matchedRoles =this.userRoleList.filter(r => r.Status=="Active");
    //   this.MId=this.matchedRoles.length.toString()
    //   console.log("userRoleIds", userRoleIds)

    //   this.service.GetAllRole().subscribe((result) => {
    //     this.roleList = []
    //     for (let data of result) {
    //       this.roleList.push(data);
    //     }
    //     this.unmatchedRoles = this.roleList.filter(role => !userRoleIds.includes(role.RoleId));
        
    //   })


    // })
  }
  ngOnInit(): void {
    // Assuming you have fetched the unmatched roles and assigned them to this.unmatchedRoles
    // Initialize isSelected property for each role
    // this.unmatchedRoles1.forEach(role => {
    //   role.isSelected = false; // Initialize all checkboxes as unchecked initially
    // });
  }

  // OnSubmit(){
  //   this.mainList = this.matchedRoles.filter(role => role.isSelected);
  //   console.log("this.mainList", this.mainList)
  //   this.roleId = this.mainList[0].RoleId;
  //     this.registration.DefaultRole =  this.roleId
  //     this.service.UpdateRegistration(this.registration).subscribe((result) => {
  //       if (result == 0) {
  //         alert('Not updated!');

  //       } else {
  //         alert('updated successfully');
  //       }
  //     });
   
  // }

  // getSelectedRoles() {
  //   this.mn = this.unmatchedRoles.filter(role => role.isSelected);
  //   console.log("this.mn", this.mn)

  //   // Extracting RoleIds from this.mn
  //   const selectedRoleIds: number[] = this.mn.map(role => role.RoleId);
  //   console.log("Selected RoleIds:", selectedRoleIds);

  //   // Iterate over selectedRoleIds array
  //   selectedRoleIds.forEach(roleId => {
  //     this.userRole.RegistrationId = this.UId; // Assuming result is already defined
  //     this.userRole.RoleId = roleId;
  //     this.userRole.Status = "InActive";

  //     // Call the AddUserRole function for each roleId
  //     this.service.AddUserRole(this.userRole).subscribe((result) => {
  //       if (result > 0) {
  //         alert('Add user Role Successfully.');
  //       } else {
  //         alert("Something went wrong! Please try again.")
  //       }
  //     });
  //   })


    // }
}

