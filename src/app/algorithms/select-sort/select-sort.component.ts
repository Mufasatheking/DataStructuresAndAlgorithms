import { Component, OnInit } from '@angular/core';
import {SelectSortStep} from "./SelectSortStep";
import {SelectSortService} from "./select-sort.service";

@Component({
  selector: 'app-select-sort',
  templateUrl: './select-sort.component.html',
  styleUrls: ['./select-sort.component.css']
})
export class SelectSortComponent implements OnInit {
  public initialArray: number[] = [];
  public startedSort = false;
  public currentSelectSortStep: SelectSortStep = {
    array: [],
    startIndex: 0,
    currentIndex: 0,
    minimumIndex: 0,
    iterations: 0,
    steps: 0,
    sorted: false,
    initial: false
  };
  public iterations = 0;
  public steps = 0;
  public sorted = false;

  constructor(public _selectSortService: SelectSortService) {
    _selectSortService.addReceiveMessageDataListener();
  }

  ngOnInit() {
    this._selectSortService.selectSortStep$.subscribe(p => {
      this.startedSort = true;
      this.iterations = p.iterations;
      this.steps = p.steps;
      this.currentSelectSortStep = p
      if (p.initial)
        this.initialArray = p.array
    })
  }

  public triggerSelectSort() {
    this._selectSortService.triggerSelectSort();
  }

  public startIndex(j:number, currentSortStep: SelectSortStep){
    return (currentSortStep.currentIndex == j && currentSortStep.startIndex == j)
    || ( currentSortStep.startIndex == j)
  }

  public currentMinimum(j:number, currentSortStep: SelectSortStep){
   return (currentSortStep.minimumIndex == j && currentSortStep.currentIndex == j)
     || (currentSortStep.minimumIndex == j && currentSortStep.startIndex == j)
     || currentSortStep.minimumIndex == j;
  }

  public currentIndex(j:number, currentSortStep: SelectSortStep){
    return(currentSortStep.minimumIndex == j && currentSortStep.currentIndex == j && currentSortStep.startIndex == j)
      ||  currentSortStep.currentIndex == j && currentSortStep.minimumIndex != j;
  }
}
