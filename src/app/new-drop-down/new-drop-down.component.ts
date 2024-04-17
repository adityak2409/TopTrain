
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
// import{MdbModalRef} from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { Registration, Role, UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { WebServiceServiceService } from '../web-service-service.service';

@Component({
  selector: 'app-new-drop-down',
  templateUrl: './new-drop-down.component.html',
  styleUrls: ['./new-drop-down.component.scss']
})
export class NewDropDownComponent implements OnInit {
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
    this.http.get('/assets/json/country.json').subscribe((data: any[]) => {
      this.countries = data;
    });
  }

  onCountryChange() {
    const selectedCountryObj = this.countries.find(country => country.id === this.selectedCountry);
    if (selectedCountryObj) {
      this.states = []; // Clear states when changing country
      this.http.get('/assets/json/state.json').subscribe((data: any[]) => {
        const countryStates = data.find(item => item.country_id === selectedCountryObj.id);
        if (countryStates) {
          this.states = countryStates.states;
        }
      });
    }
  }

  onStateChange() {
    const selectedStateObj = this.states.find(state => state.id === this.selectedState);
    if (selectedStateObj) {
      this.http.get('/assets/json/city.json').subscribe((data: any[]) => {
        const stateCities = data.find(item => item.state_id === selectedStateObj.id);
        if (stateCities) {
          this.cities = stateCities.cities;
        }
      });
    }
  }
}