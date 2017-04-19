import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_CONFIG, AppConfigLocal } from './../appconfig/app.config';
import { AppComponent } from './app.component';
import { PersonComponent } from './adminPersons/person/component/Personcompnent/Person.component';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ { provide: APP_CONFIG, useValue: AppConfigLocal } ],
  bootstrap: [PersonComponent]
})
export class AppModule { }
