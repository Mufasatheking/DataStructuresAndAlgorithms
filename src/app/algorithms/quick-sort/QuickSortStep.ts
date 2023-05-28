export interface QuickSortStep {
  array: number[];
  pivotIndex: number;
  leftPointerIndex: number;
  leftComparing: boolean;
  leftPointerValue?: number;
  rightPointerIndex: number;
  rightComparing: boolean;
  rightPointerValue?:number
  swapping: boolean;
  iterations: number;
  steps: number;
  pivotSwap:boolean;
  sorted: boolean;
  initial: boolean;
  message:string;
}
