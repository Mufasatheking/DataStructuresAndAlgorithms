import { Component, OnInit } from '@angular/core';
import {BubbleSortService} from "./bubble-sort.service";
import {BubbleSortStep} from "./BubbleSortStep";
import {MatChipsModule} from '@angular/material/chips';

class SortingStep {
  array: number[] = [];
  index: number = 1;
  comparing: boolean = false;
  swapped: boolean = false;
  sorted:boolean = false;
  initial:boolean = false;
}


@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {

  public initialArray: number[] = [];
  public sortingSteps: SortingStep[] = [];
  public currentStep: SortingStep = new SortingStep();
  public startedSort = false;
  public currentBubbleSortStep: BubbleSortStep= {
    array: [],
    index: 0,
    iterations: 0,
    steps: 0,
    comparing: false,
    swapped: false,
    sorted: false,
    initial: false
  };
  public iterations = 0;
  public steps = 0;
  public sorted = false;
  constructor(public _bubbleSortService: BubbleSortService) {
    _bubbleSortService.addReceiveMessageDataListener();
  }
  ngOnInit() {
    this._bubbleSortService.bubbleSortStep$.subscribe(p => {
      this.startedSort = true;
      this.iterations = p.iterations;
      this.steps = p.steps;
      this.currentBubbleSortStep = p
      if(p.initial)
        this.initialArray = p.array
    })
  }
  public triggerBubbleSort(){
    this._bubbleSortService.triggerBubbleSort();
  }
  /*ngOnInit(): void {
    let randomNumberArray: number[] = []
    setTimeout(() => {
      let reverseOrderedArray = [90,84,83,61,58,56,26,15,12,5] //Worst case scenario
      randomNumberArray = reverseOrderedArray//this.GenRandomNumberArray(10)
      this.initialArray = [...randomNumberArray]
      //console.log(`Initial: ${randomNumberArray}`)
      //console.log("");
      let finalArray = this.bubbleSortArray2(randomNumberArray)
      //console.log("");
      //console.log(`Final Array ${finalArray}`);
    }, 2000)
  }*/

  public GenRandomNumberArray(size:number): number[] {
    let randomNumberArray = [];
    for (let i = 0; i < size; i++) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      randomNumberArray.push(randomNum);
    }
    return randomNumberArray
  }

  public bubbleSortArray(array: number[]) {
    let wasSwapped = true;
    while (wasSwapped) {
      wasSwapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        this.iterations++
        this.sortingSteps.push(<SortingStep>{array: [...array], index: i, comparing: true});
        this.currentStep = <SortingStep>{array: [...array], index: i, comparing: true}
        if (array[i] > array[i + 1]) {
          let first = array[i];
          array[i] = array[i + 1];
          array[i + 1] = first;
          wasSwapped = true;
          this.sortingSteps.push(<SortingStep>{array: [...array], index: i, swapped: true});
          this.currentStep = <SortingStep>{array: [...array], index: i, swapped: true}
        }
        console.log(`${array}`);
      }
    }
    return array
  }

  bubbleSortArray2(array: number[]) {
    let wasSwapped = false;
    let i = 0;
    let loopPass = 0; // Variable to track which pass we're on

    let loop = () => {
      // If we've finished a pass and no swaps were made, the array is sorted
      if (i >= array.length - loopPass && !wasSwapped) {
        this.currentStep = <SortingStep>{array: [...array], index: i, sorted: true}
        return;
      }
      // If we've finished a pass, reset for the next pass
      if (i >= array.length - loopPass) {
        wasSwapped = false;
        i = 0;
        loopPass++;
        this.iterations++
      }
      this.steps++
      this.currentStep = <SortingStep>{array: [...array], index: i, comparing: true}; // Always display in yellow

      if (array[i] > array[i + 1]) {
        let first = array[i];
        array[i] = array[i + 1];
        array[i + 1] = first;
        wasSwapped = true;
        this.steps++;
        // Add a delay here to visualize the swap
        setTimeout(() => {
          this.currentStep = <SortingStep>{array: [...array], index: i, swapped: true}; // Display if there's a swap
          i++;
          setTimeout(loop, 200); // Delay the next step
        }, 200);

        return; // Exit the current iteration to wait for the timeout
      }

      //console.log(`${array}`);
      i++;

      setTimeout(loop, 200);  // adjust the delay as needed
    };

    loop();
  }



}
