import { SortTestHelper } from '../util/sort-test-helper'

export class BubbleSort {
  /**
   * The implementation of Bubble sort
   * @param arr The sorted array
   */
  public static bubbleSort (arr: number[]): void {

    for (let i = 0; i < arr.length; i++) {
      // Compare and swap, put the greater value to the end
      for (let j = 0; j < arr.length - i - 1; j ++) {
        if (arr[j] > arr[j + 1]) {
          const temp: number = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  }
}
