export class MergeSort {
  public static mergeSort (arr: number[]) {
    MergeSort.__mergeSort(arr, 0, arr.length - 1 )
  }
  // Use recusion to sort arr[l, r]
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
