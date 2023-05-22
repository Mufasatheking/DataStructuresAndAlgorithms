import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BubbleSortComponent} from "./algorithms/bubble-sort/bubble-sort.component";
import { HomeComponent } from './home/home.component';
import { SignalRTestComponent } from './signal-rtest/signal-rtest.component';
import {HttpClientModule} from "@angular/common/http";
import { SelectSortComponent } from './algorithms/select-sort/select-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    HomeComponent,
    SignalRTestComponent,
    SelectSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
