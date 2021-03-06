import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { SurpriseFormComponent } from './surprise-form';
import { EventTimelineComponent } from './event-timeline';

import { SHARED_SERVICES } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    SurpriseFormComponent,
    EventTimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: SHARED_SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
