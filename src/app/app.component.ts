import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events = [];

  setEvents(events: Array<Object>) {
    this.events = events;
  }
}
