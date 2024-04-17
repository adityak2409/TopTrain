import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { VendorDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../../web-service-service.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class VendorDetailComponent {
//  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  // myControl = new FormControl();
  // options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  // filteredOptions: string[];


  // modalRef: MdbModalRef<IndividualselectroleComponent> | null = null;

  vendorDetail:VendorDetail;
  // aboutlist  : any[];
  VendorDetailId: any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.vendorDetail = new VendorDetail();

      this.route.params.subscribe((params) => {
        this.VendorDetailId = params['VendorDetailId'];
  
        this.service.GetVendorDetailById(this.VendorDetailId).subscribe((result) => {
       
          this.vendorDetail = result;
          console.log(this.vendorDetail);
  
        });
      });
    }


    OnSubmit(){
      debugger;
            console.log(this.vendorDetail);
            this.service.UpdateVendorDetail(this.vendorDetail).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                const formData = new FormData();
                this.vendorDetail.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.vendorDetail.Photo);
                this.service.SaveVendorDetailImage(formData,result).subscribe(data => {
                 
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
              this.vendorDetail.Photo = this.filesToUpload[i].name;
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

      }

      OnPostJob(){
        this.router.navigateByUrl("/add-job")
      }

      OnAddEmployer(){
        this.router.navigateByUrl("/add-employer")
      }
      OnAddCourse(){
        this.router.navigateByUrl("/add-course") 
      }
      

}
