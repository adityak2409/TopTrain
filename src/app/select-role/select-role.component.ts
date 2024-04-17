
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebServiceServiceService } from 'src/app/web-service-service.service';
import { Registration, UserDetail, VendorDetail } from '../Class';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.scss']
})
export class SelectRoleComponent {

  RegistrationId:any
  UId:any
  VId:any
  UserId:any
  UserDetailId:any
  VendorDetailId:any
  newId:any
  userDetail: UserDetail
  vendorDetail:VendorDetail
  registration:Registration
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  userDetailsList:any[]
  userDetailmainList:any[]
  vendorDetailsList:any[]
  vendorDetailmainList:any[]
  
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) {

      //  this.filteredOptions = this.options.slice();

     
      this.vendorDetail=new VendorDetail
    
   

    
    


  }
  

  OnSubmitUser(){
   
          this.userDetail.RegistrationId=this.UId
          this.userDetail.Status="Active"
          this.userDetail.EndUserPlanId
          this.userDetail.ProfileTagLine=''
          this.userDetail.Photo=''
          this.userDetail.BirthDate=''
          this.userDetail.Address=''
          this.userDetail.ContactNo=''
          this.userDetail.CountryId
          this.userDetail.StateId

          this.userDetailsList=[]
          this.userDetailmainList=[]
        
      

      this.service.AddUserDetail(this.userDetail).subscribe((result) => {
        if (result > 0) {

       
        
         
         // const formData = new FormData();
         // this.userDetail.Photo = this.filesToUpload[0].name;
         // formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
         // this.service.SaveUserDetailImage(formData,result).subscribe(data => {
        
      
        }
        
      
            //  this.router.navigate(["/app-userdetail"]); // Navigate to EndUser page 
            this.service.GetAllUserDetail().subscribe((result) => {
              // console.log(result);
              for(let data of result){
                  this.userDetailsList.push(data);   
              }
              console.log("userDetailsList",this.userDetailsList);
              console.log("Id",this.UId)
              // console.log(this.RegistrationId)

               this.userDetailmainList= this.userDetailsList.filter(x => x.RegistrationId==this.UId);
              
              // this.userDetailmainList= this.userDetailsList.filter(x => x.UserDetailId==this.UserId);
              // console.log("Id",this.UserId)
               console.log("userDetailmainList",this.userDetailmainList);

              if(this.userDetailmainList.length==1){
              
               // this.openModal()
               const userDetailmainList = this.userDetailmainList[0]; // Get the first item from the filtered list
               this.UserDetailId = userDetailmainList.UserDetailId;
               localStorage.setItem('UserId',this.UserDetailId);

              //  console.log("result",result)
                // this.UserId = JSON.parse(localStorage.getItem('UserDetailId'));
                console.log("UserDetailId",this.UserDetailId)

                alert('Saved Successfully.');
                this.router.navigateByUrl("/app-userdetail/" + this.UserDetailId);
              }
              
              
              else{
                    console.log("Something went wrong")
              }
               
               
              
             
            })
               
            
    
            
          
    
    
          });
     
     }

























     
     OnSubmitVendor(){
      this.vendorDetail.RegistrationId=this.UId
    console.log("vendorDetail",this.vendorDetail);

          this.vendorDetail.Status="Active"
   
          this.vendorDetail.ProfileTagLine=''
          this.vendorDetail.Photo=''
          this.vendorDetail.BirthDate=''
          this.vendorDetail.Address=''
          this.vendorDetail.ContactNo=''
          this.vendorDetail.CountryId
          this.vendorDetail.StateId

          this.vendorDetailsList=[]
          this.vendorDetailmainList=[]
      

          this.service.AddVendorDetail(this.vendorDetail).subscribe((result) => {
            if (result > 0) {
    
           
            
             
             // const formData = new FormData();
             // this.vendorDetail.Photo = this.filesToUpload[0].name;
             // formData.append('uploadedImage',this.filesToUpload[0],this.vendorDetail.Photo);
             // this.service.SaveVendorDetailImage(formData,result).subscribe(data => {
            
          
            }
            
          
                //  this.router.navigate(["/app-userdetail"]); // Navigate to EndUser page 
                this.service.GetAllVendorDetail().subscribe((result) => {
                  // console.log(result);
                  for(let data of result){
                      this.vendorDetailsList.push(data);   
                  }
                  console.log("vendorDetailsList",this.vendorDetailsList);
                  console.log("Id",this.UId)
                  // console.log(this.RegistrationId) 
    
                   this.vendorDetailmainList= this.vendorDetailsList.filter(x => x.RegistrationId==this.UId);
                  
                  // this.vendorDetailmainList= this.vendorDetailsList.filter(x => x.VendorDetailId==this.UserId);
                  // console.log("Id",this.VendorId)
                   console.log("vendorDetailmainList",this.vendorDetailmainList);
    
                  if(this.vendorDetailmainList.length==1){
                  
                   // this.openModal()
                   const vendorDetailmainList = this.vendorDetailmainList[0]; // Get the first item from the filtered list
                   this.VendorDetailId = vendorDetailmainList.VendorDetailId;
                   localStorage.setItem('VendorId',this.VendorDetailId);
    
                  //  console.log("result",result)
                    // this.UserId = JSON.parse(localStorage.getItem('VendorDetailId'));
                    console.log("VendorDetailId",this.VendorDetailId)
    
                    alert('Saved Successfully.');
                    this.router.navigateByUrl("/app-vendor-detail/" + this.VendorDetailId);
                  }
                  
                  
                  else{
                        console.log("Something went wrong")
                  }
                   
                   
                  
                 
                })
                   
                
        
                
              
        
        
              });
         
         }
    
    
    
  
        }

