
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import{MdbModalRef} from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-drop-down-with-api',
  templateUrl: './drop-down-with-api.component.html',
  styleUrls: ['./drop-down-with-api.component.scss']
})
export class DropDownWithAPIComponent implements OnInit {
  countries: any[];
  states: any[];
  cities: any[];

  selectedCountry: string;
  selectedState: string;

  constructor(
    private http: HttpClient,
    private service: WebServiceServiceService
  ) {}

  ngOnInit() {
   
      this.service.GetAllCountries().subscribe((data) => {
        this.countries = data;
      })
        // console.log(result);
     
  
  }

  onCountryChange() {
    this.http.get<any[]>(`/api/states/${this.selectedCountry}`).subscribe(data => {
      this.states = data;
    });
  }

  onStateChange() {
    this.http.get<any[]>(`/api/cities/${this.selectedState}`).subscribe(data => {
      this.cities = data;
    });
  }
}
