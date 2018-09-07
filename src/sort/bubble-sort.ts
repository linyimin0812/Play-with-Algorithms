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
          arr  [j]           = arr[j + 1]
          arr  [j + 1]       = temp
        }
      }
    }
  }

  /**
   * The optimized implementation of bubble sort
   * @param arr The sorted array
   */
  public static bubbleSortOptimization (arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let flag: boolean = false
      for (let j = 0; j < arr.length - i - 1; j ++) {
        if (arr[j] > arr[j + 1]) {
          const temp: number = arr[j]
          arr  [j]           = arr[j + 1]
          arr  [j + 1]       = temp

          flag = true
        }
      }
      // If not swap, then the array is in order
      if (! flag) {
        break
      }
    }
  }
}
