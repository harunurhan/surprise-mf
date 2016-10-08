import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'surprise mf?';
  events = [];
  _events = [
    {
      date: 'date-1',
      title: 'title-1',
      description: 'whatever whatever things others 1',
      detailsLink: '#',
      type: 'flight'
    },
    {
      date: 'date-2',
      title: 'title-2',
      description: 'whatever whatever things others 2',
      detailsLink: '#',
      type: 'flight'
    },
    {
      date: 'date-3',
      title: 'title-3',
      description: 'whatever whatever things others 3',
      detailsLink: '#',
      type: 'hotel'
    },
    {
      date: 'date-4',
      title: 'title-4',
      description: 'whatever whatever things others 4',
      detailsLink: '#',
      type: 'flight'
    },
    {
      date: 'date-5',
      title: 'title-5',
      description: 'whatever whatever things others 5',
      detailsLink: '#',
      type: 'flight'
    }
  ];
}
