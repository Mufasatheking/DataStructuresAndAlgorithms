export interface BubbleSortStep {
  array: number[];
  index: number;
  iterations:number;
  steps:number;
  comparing: boolean;
  swapped: boolean;
  sorted: boolean;
  initial: boolean;
}
