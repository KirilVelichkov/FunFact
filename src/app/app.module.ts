import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FactsModule } from './components/facts/facts.module';
import { AuthenticationModule } from './authentication/authentication.module'

import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';
import { AppComponent } from './app.component';
import { FactUploadComponent } from './components/facts/fact-upload.component';
import { FactsListComponent } from './components/facts/fact-list.component';
import {FactComponent } from './components/facts/fact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FactUploadComponent,
    FactsListComponent,
    AuthenticationComponent,
<<<<<<< HEAD
    AlertComponent
=======
    FactComponent
>>>>>>> 80aa6a200b37c684cf59a3b547fdbcf58d9839a3
  ],
  imports: [
    ImageUploadModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FactsModule,
    Ng2UploaderModule,
    ReactiveFormsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
