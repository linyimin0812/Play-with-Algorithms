export class SelectionSort {
  /**
   * The implementation of selection sort
   * @param arr The array to be sorted
   */
  public static selectionSort (arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      // Look for the minimum value in the unsorted part, that is,
      // the minimum value in the interval [i, n)
      let minIndex: number = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      // The minimum value and the first value which in unsorted part swap position
      const temp       = arr[i]
      arr   [i]        = arr[minIndex]
      arr   [minIndex] = temp
    }
  }
}
