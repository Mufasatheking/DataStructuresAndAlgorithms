export interface InsertionSortStep {
  array: number[];
  startIndex: number;
  compareIndex: number;
  gapIndex: number;
  currentNumber:number;
  iterations:number;
  steps:number;
  sorted: boolean;
  initial: boolean;
}
