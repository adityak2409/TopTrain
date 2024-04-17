import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../../web-service-service.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit{

  //  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  // myControl = new FormControl();
  // options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  // filteredOptions: string[];


  // modalRef: MdbModalRef<IndividualselectroleComponent> | null = null;
  userDetail:UserDetail;
  // aboutlist  : any[];
  UserDetailId: any;
  userDetailsList:any[]
  userDetailmainList:any[]
  uploadResult: any;
  UId:any
  roles: string[] = [];
  userid:any;
  role:Role
  RegistrationId:any
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.userDetail = new UserDetail();

     this.role= new Role();
     

      // this.route.params.subscribe((params) => {
      //   this.UserDetailId = params['UserDetailId'];
        this.route.params.subscribe((params) => {

          this.userid = JSON.parse(localStorage.getItem('SID'));
          

          console.log("userid",this.userid)
       this.RegistrationId = this.userid;
               
                console.log("RegistrationId",this.RegistrationId)
               
              });



              
        this.service.GetUserDetailById(this.UserDetailId).subscribe((result) => {
       
          this.userDetail = result;
          console.log(this.userDetail);

  
        });

        this.service.GetAllRole().subscribe(roles => {
          // Exclude the first role
          // this.roles = this.roles.slice(1);
         
          this.userDetailsList = roles.filter(data => data.Title !== "Admin");
          console.log(this.roles)
        });


        this.userDetail.RegistrationId=this.userid
        this.userDetail.Status="Active"
      // });
    }


    OnSubmit(){
      debugger;
           
      
              // this.userDetail.EndUserPlanId
              // this.userDetail.ProfileTagLine=''
              // this.userDetail.Photo=''
              // this.userDetail.BirthDate=''
              // this.userDetail.Address=''
              // this.userDetail.ContactNo=''
              // this.userDetail.CountryId
              // this.userDetail.StateId
    
              this.userDetailsList=[]
              this.userDetailmainList=[]
            
          
    
         
            
          
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
              
  
           
                this.service.AddUserDetail(this.userDetail).subscribe((result) => {
                 
                  if (result > 0) {
          
                 
                  
                   
                   // const formData = new FormData();
                   // this.userDetail.Photo = this.filesToUpload[0].name;
                   // formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
                   // this.service.SaveUserDetailImage(formData,result).subscribe(data => {
                  
                
                  }
              })





            console.log(this.userDetail);
            this.service.UpdateUserDetail(this.userDetail).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                const formData = new FormData();
                this.userDetail.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
                this.service.SaveUserDetailImage(formData,result).subscribe(data => {
                 
                  alert('Saved Successfully.');
                });         
             }            
            });
          }
        
          fileChangeEvent(fileInput: any){
          this.filesToUpload = <Array<File>>fileInput.target.files;
          this.selectedFileNames = [];
          for (let i = 0; i < this.filesToUpload.length; i++)
          {
              this.selectedFileNames.push(this.filesToUpload[i].name);
              this.userDetail.Photo = this.filesToUpload[i].name;
          } 
          }

 


  // openModal() {
  //   this.modalRef = this.modalService.open(IndividualselectroleComponent)
  // }


  @ViewChild('countryInput') countryInput: ElementRef<HTMLInputElement>;
  @ViewChild('stateInput') stateInput: ElementRef<HTMLInputElement>;
  @ViewChild('cityInput') cityInput: ElementRef<HTMLInputElement>;
  
  countryControl = new FormControl('');
  stateControl = new FormControl('');
  cityControl = new FormControl('');
  
  countryOptions: any[] = [];
  stateOptions: any[] = [];
  cityOptions: any[] = [];
  
  filteredCountryOptions: any[];
  filteredStateOptions: any[];
  filteredCityOptions: any[];
  
  
  
  updatePlaceholder(inputElement: ElementRef<HTMLInputElement>, filteredOptions: any[]): void {
    const autocompleteTextBox = inputElement.nativeElement;
  
    if (filteredOptions.length === 0) {
      autocompleteTextBox.placeholder = 'Empty';
    } else {
      autocompleteTextBox.placeholder = 'Start typing...';
    }
  }
  
  getCountry() {
    this.countryOptions = [];
    this.http.get('/assets/json/country.json').subscribe((data: any) => {
      this.countryOptions.push(data);
      // this.options = this.countryOptions; // Update the options array with country names
      console.log('countryOptions is ', this.countryOptions);
      // console.log('options is ', this.options);
    });
  }
  
  getState(cntryid) {
    debugger;
    // Similarly, fetch state data and update stateOptions array
    this.stateOptions = [];
    this.cityOptions = [];
    this.http.get('/assets/json/state.json').subscribe((data: any) => {
      this.stateOptions.push(data);
      debugger;
      console.log('stateOptions is ', this.stateOptions);
      this.stateOptions =this.stateOptions[0].filter(s => s.country_id === cntryid);
      console.log('Filtered ststeoption is is ', this.stateOptions);
    });
  }
  
  getCity(steid) {
    this.cityOptions = [];
    // Similarly, fetch state data and update stateOptions array
    this.http.get('/assets/json/city.json').subscribe((data: any) => {
      this.cityOptions.push(data);
      console.log('cityOptions is ', this.cityOptions);
      this.cityOptions =this.cityOptions[0].filter(s => s.state_id === steid);
      console.log('Filtered ststeoption is is ', this.stateOptions);
    });
  }
  
  // Extra
  
  
  filterCountry(ss): void {
    this.stateOptions = [];
  
    const filterValue = this.countryInput.nativeElement.value.toLowerCase();
    this.filteredCountryOptions = this.countryOptions[0].filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.countryInput, this.filteredCountryOptions);
    debugger;
    // Update stateOptions based on the selected country
    const selectedCountry = this.countryOptions[0].find(c => c.id === ss);
    debugger;
    // this.stateOptions = selectedCountry ? this.stateOptions[0].filter(s => s.country_id === selectedCountry.id) : [];
    console.log("selected country",);
    this.getState(selectedCountry.id);
  }
  
  filterState(cc): void {
    const filterValue = this.stateInput.nativeElement.value.toLowerCase();
    this.filteredStateOptions = this.stateOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.stateInput, this.filteredStateOptions);
  
    // Update cityOptions based on the selected state
    const selectedState = this.stateOptions.find(s => s.id === cc);
   
    // this.cityOptions = selectedState ? this.cityOptions[0].filter(c => c.state_id === selectedState.id) : [];
    this.getCity(selectedState.id);
  }
  
  filterCity(): void {
    const filterValue = this.cityInput.nativeElement.value.toLowerCase();
    this.filteredCityOptions = this.cityOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.cityInput, this.filteredCityOptions);
  }

 
  ngOnInit(): void {

    this.getCountry();
    //  this.getState;
    //  this.getCity;

      }

      OnApplyJob(){
        this.router.navigateByUrl("/")
      }


}
