export class MergeSort {
  /**
   * The implementation of mergeSort with recursion
   * @param arr The arr is the array to be sorted
   */
  public static mergeSort (arr: number[]) {
    MergeSort.__mergeSort(arr, 0, arr.length - 1 )
  }

  /**
   * @param arr The arr is the array to be sorted
   */
  public static mergeSortOptimizationWithMerge (arr: number[]) {
    MergeSort.__mergeSortOptimizationWithMerge(arr, 0, arr.length - 1)
  }

  /**
   * Use insertionSort replace merge sort wneh the sequences are small enough
   * @param arr The arr is the array to be sorted
   */
  public static mergeSortOptimizationWithInsertionSort (arr: number[]) {
    MergeSort.__mergeSortOptimizationWithInsertionSort(arr, 0, arr.length - 1)
  }

  /**
   * Use recusion to sort arr[l, r]
   * @param arr 
   * @param l The begin of the array
   * @param r The end of the array
   */
  private static __mergeSort (arr: number[], l: number, r: number) {
    if (l >= r) {
      return
    }
    // Important: We need to make sure mid is a integer, or the sort algorithm will be very slow
    const mid: number = Math.floor((l + r) / 2)
    MergeSort.__mergeSort(arr, l, mid)
    MergeSort.__mergeSort(arr, mid + 1, r)
    MergeSort.__merge(arr, l, mid, r)
  }

  /**
   * Use Recursion to sort arr[l, r], and if the 2 sequences are in order, not invoke the merge function 
   * @param arr 
   * @param l The begin of the array
   * @param r The end of the array
   */
  private static __mergeSortOptimizationWithMerge (arr: number[], l: number, r: number) {
    if (l >= r) {
      return
    }
    const mid: number = Math.floor((r + l) / 2)
    MergeSort.__mergeSortOptimizationWithMerge(arr, l, mid)
    MergeSort.__mergeSortOptimizationWithMerge(arr, mid + 1, r)
    if (arr[mid] > arr[mid + 1]) {
      MergeSort.__merge(arr, l, mid, r)
    }
  }

  /**
   * The optimized implementation of merge sort useing insertion sort when the sequences are small enough 
   * @param arr 
   * @param l The begin of the sequence
   * @param r The end of the sequence
   */
  private static __mergeSortOptimizationWithInsertionSort (arr: number[], l: number, r: number) {
    if (r-l <= 15) {
      MergeSort.__insertionSort(arr, l, r)
      return
    }

    const mid: number = Math.floor((r + l) / 2)
    MergeSort.__mergeSortOptimizationWithInsertionSort(arr, l, mid)
    MergeSort.__mergeSortOptimizationWithInsertionSort(arr, mid + 1, r)
    MergeSort.__merge(arr, l, mid, r)
  }

  private static __insertionSort (arr: number[], l: number, r: number) {
    for (let i = l + 1; i <= r; i++) {
      let j = i
      const currentValue: number = arr[j]
      for (j = i; j > l; j--) {
        if (currentValue < arr[j - 1]) {
          arr[j] = arr[j - 1]
        }
      }
      arr[j] = currentValue
    }
    return
  }

  // Merge arr[l,mid] and arr[mid + 1, r], and they are in order
  private static __merge(arr: number[], l: number, mid: number, r: number) {
    // Create auxiliary space
    const aux: number[] = new Array(r-l+1)

    for (let i = l; i <= r; i++) {
      aux[i - l] = arr[i]
    }
  
    // merge two sorted array
    let i = l
    let j = mid + 1
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j - l]
        j++
      } else if (j > r) {
        arr[k] = aux[i - l]
        i++
      } else if (aux[i - l] < aux[j - l]) {
        arr[k] = aux[i - l]
        i++
      } else {
        arr[k] = aux[j - l]
        j++
      }
    }
  }
}
