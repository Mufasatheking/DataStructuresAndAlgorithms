import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BubbleSortComponent} from "./algorithms/bubble-sort/bubble-sort.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'bubble-sort', component: BubbleSortComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
