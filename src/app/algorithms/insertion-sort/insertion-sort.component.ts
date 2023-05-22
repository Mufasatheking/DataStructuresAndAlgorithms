import { Component, OnInit } from '@angular/core';
import {SelectSortStep} from "../select-sort/SelectSortStep";
import {SelectSortService} from "../select-sort/select-sort.service";
import {InsertionSortStep} from "./InsertionSortStep";
import {InsertionSortService} from "./insertion-sort.service";

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent  implements OnInit {
  public initialArray: number[] = [];
  public startedSort = false;
  public currentInsertionSortStep: InsertionSortStep = {
    array: [],
    startIndex: 0,
    compareIndex: 0,
    gapIndex: 0,
    currentNumber: 0,
    iterations: 0,
    steps: 0,
    sorted: false,
    initial: false
  };
  public iterations = 0;
  public steps = 0;
  public sorted = false;

  constructor(public _insertionSortService: InsertionSortService) {
    _insertionSortService.addReceiveMessageDataListener();
  }

  ngOnInit() {
    this._insertionSortService.insertionSortStep$.subscribe(p => {
      this.startedSort = true;
      this.iterations = p.iterations;
      this.steps = p.steps;
      this.currentInsertionSortStep = p
      if (p.initial)
        this.initialArray = p.array
    })
  }

  public triggerInsertionSort() {
    this._insertionSortService.triggerInsertionSort();
  }
}
