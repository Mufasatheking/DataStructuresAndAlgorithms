import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BubbleSortComponent} from "./algorithms/bubble-sort/bubble-sort.component";
import { HomeComponent } from './home/home.component';
import { SignalRTestComponent } from './signal-rtest/signal-rtest.component';
import {HttpClientModule} from "@angular/common/http";
import { SelectSortComponent } from './algorithms/select-sort/select-sort.component';
import { InsertionSortComponent } from './algorithms/insertion-sort/insertion-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";
import { PartitionExampleComponent } from './algorithms/quick-sort/partition-example/partition-example.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    HomeComponent,
    SignalRTestComponent,
    SelectSortComponent,
    InsertionSortComponent,
    PartitionExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
