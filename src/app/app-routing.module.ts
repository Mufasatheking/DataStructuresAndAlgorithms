import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BubbleSortComponent} from "./algorithms/bubble-sort/bubble-sort.component";
import {HomeComponent} from "./home/home.component";
import {SignalRTestComponent} from "./signal-rtest/signal-rtest.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bubble-sort', component: BubbleSortComponent },
  { path: 'signal-rtest', component: SignalRTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
