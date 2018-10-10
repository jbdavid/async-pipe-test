import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LongTermObservableComponent } from './long-term-observable/long-term-observable.component';
import { ContactsService } from "./service/contacts-service.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SeqComponent } from './seq/seq.component';

@NgModule({
  declarations: [
    AppComponent,
    LongTermObservableComponent,
    SeqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
