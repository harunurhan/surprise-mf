import { Component, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../shared';

@Component({
  selector: 'surprise-form',
  templateUrl: './surprise-form.component.html',
  styleUrls: ['./surprise-form.component.css']
})
export class SurpriseFormComponent {
  data: Data = {
    cities: [],
    startDate: null,
    endDate: null,
    startCity: null,
    endCity: null
  };
  newCity: NewCity = { name: null };

  @Output() onSurpriseReceived: EventEmitter<any> = new EventEmitter<any>();
  @Output() onWaitForSurprise: EventEmitter<any> = new EventEmitter<any>();

  isWaitingForSurprise: boolean = false;

  constructor(private apiService: ApiService) { }

  addNewCity() {
    this.data.cities.push(this.newCity.name);
    this.newCity.name = null;
  }

  removeCityAt(index: number) {
    this.data.cities.splice(index, 1);
  }

  surprise() {
    this.isWaitingForSurprise = true;
    this.apiService.post('surprise', this.data)
      .subscribe(events => {
        this.isWaitingForSurprise = false;
        this.onSurpriseReceived.emit(events);
      });
  }
}

interface Data {
  cities: Array<string>;
  startDate: string;
  endDate: string;
  startCity: string;
  endCity: string;
}

interface NewCity {
  name: string;
}
