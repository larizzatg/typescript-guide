import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
    super();
  }

  get length(): number {
    return this.data.length;
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
} 