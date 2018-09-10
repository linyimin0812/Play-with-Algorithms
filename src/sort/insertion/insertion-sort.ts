export class InsertionSort {

  /**
   * The implementation of insertion sort
   * @param arr The array to be sorted
   */
  public static insertionSort (arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      // Find the appropriate insertion position for the arr[i] element
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          const temp   = arr[j]
          arr  [j]     = arr[j - 1]
          arr  [j - 1] = temp
        } else {
          break
        }
      }
    }
  }

  /**
   * The optimized implementation of insertion sort
   * @param arr The array to be sorted
   */
  public static insertionSortOptimization (arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      // Find the appropriate insertion position for the arr[i] element
      let   j            = 0
      const currentValue = arr[i]
      for (j = i; j > 0; j --) {
        if (currentValue < arr[j - 1]) {
          arr[j] = arr[j - 1]
        } else {
          break
        }
      }
      arr[j] = currentValue
    }
  }
}
