import { Component, OnInit } from '@angular/core';
import {InsertionSortStep} from "../../insertion-sort/InsertionSortStep";
import {InsertionSortService} from "../../insertion-sort/insertion-sort.service";
import {QuickSortStep} from "../QuickSortStep";
import {PartitionExampleService} from "./partition-example.service";

@Component({
  selector: 'partition-example',
  templateUrl: './partition-example.component.html',
  styleUrls: ['./partition-example.component.css']
})
export class PartitionExampleComponent implements OnInit {
  public initialArray: number[] = [];
  public startedSort = false;
  public currentPartitionExampleStep: QuickSortStep = {
    array: [],
    pivotIndex:0,
    leftPointerIndex:0,
    leftComparing:true,
    leftPointerValue:undefined,
    rightPointerIndex:0,
    rightComparing:false,
    rightPointerValue:undefined,
    swapping:false,
    iterations: 0,
    steps: 0,
    pivotSwap:false,
    sorted: false,
    initial: false,
    message: "",
    previousPivotIndexes:[]
  };
  public iterations = 0;
  public steps = 0;
  public sorted = false;

  constructor(public _partitionExampleService: PartitionExampleService) {
    _partitionExampleService.addReceiveMessageDataListener();
  }

  ngOnInit() {
    this._partitionExampleService.partitionExampleStep$.subscribe(p => {
      this.startedSort = true;
      this.iterations = p.iterations;
      this.steps = p.steps;
      this.currentPartitionExampleStep = p
      if (p.initial)
        this.initialArray = p.array
    })
  }

  public triggerPartitionExample() {
    this._partitionExampleService.triggerPartitionExample();
  }

}
