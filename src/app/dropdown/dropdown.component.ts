import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import{MdbModalRef} from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
 userDetail:UserDetail
//  modalRef: MdbModalRef<DropdownComponent> | null = null;



  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebServiceServiceService) { 
      this.userDetail = new UserDetail();
    }
  OnSubmit(){

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
    console.log(cntryid)
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
    debugger
    this.stateOptions = [];
  
    const filterValue = this.countryInput.nativeElement.value.toLowerCase();
    this.filteredCountryOptions = this.countryOptions[0].filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.countryInput, this.filteredCountryOptions)
    debugger;
    // Update stateOptions based on the selected country
    const selectedCountry = this.countryOptions[0].find(c => c.id === ss);
    debugger;
    // this.stateOptions = selectedCountry ? this.stateOptions[0].filter(s => s.country_id === selectedCountry.id) : [];
    console.log("selected country");
   console.log("selectedCountry",selectedCountry.id)
    this.getState(selectedCountry.id);
   
  }
  
  filterState(cc): void {
    const filterValue = this.stateInput.nativeElement.value.toLowerCase();
    this.filteredStateOptions = this.stateOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.stateInput, this.filteredStateOptions);
    debugger;
    // Update cityOptions based on the selected state
    const selectedState = this.stateOptions.find(s => s.id === cc);
    debugger;
    // this.cityOptions = selectedState ? this.cityOptions[0].filter(c => c.state_id === selectedState.id) : [];
    this.getCity(selectedState.id);
  }
  
  filterCity(): void {
    const filterValue = this.cityInput.nativeElement.value.toLowerCase();
    this.filteredCityOptions = this.cityOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.cityInput, this.filteredCityOptions);
    debugger;
  }


  ngOnInit(): void {

    this.getCountry();

      }


}
