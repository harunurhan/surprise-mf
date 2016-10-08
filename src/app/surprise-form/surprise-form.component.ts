import { Component } from '@angular/core';

import { ApiService } from '../shared';

@Component({
  selector: 'surprise-form',
  templateUrl: './surprise-form.component.html',
  styleUrls: ['./surprise-form.component.css']
})
export class SurpriseFormComponent {
  data: Data = {
    cities: [],
    fromDate: null,
    toDate: null,
    fromCity: null,
    toCity: null
  };
  newCity: NewCity = { name: null };

  constructor(private apiService: ApiService) {}

  addNewCity() {
    this.data.cities.push(this.newCity.name);
    this.newCity.name = null;
  }

  surprise() {
    this.apiService.post('surprise', this.data);
  }
}

interface Data {
  cities: Array<string>;
  fromDate: string;
  toDate: string;
  fromCity: string;
  toCity: string;
}

interface NewCity {
  name: string;
}
