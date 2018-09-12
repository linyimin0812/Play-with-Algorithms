export class MergeSortItetation {

  /**
   * The implementation of merge sort from buttom to up
   * @param arr The array to be sorted
   */
  public static mergeSort (arr: number[]) {
    // 1, 2, 4, 8, 16, ......
    for (let i = 1; i <= arr.length; i += i) {
      // merge
      for (let j = 0; j + i < arr.length; j += i + i) {
        MergeSortItetation.__merge(arr, j, j + i- 1, MergeSortItetation.__min(j + i + i - 1, arr.length - 1))
      }
    }
  }

  /**
   * Merge two sorted sequences
   * @param arr Which contains two sorted sequences to be merged
   * @param l The begin index of first sorted sequence
   * @param mid The end index of first sorted sequence
   * @param r The lase index of the second sorted sequence
   */
  private static __merge(arr: number[], l: number, mid: number, r: number) {
    // auxiliary array
    const aux: number[] = new Array(r - l + 1)
    for (let i = l; i <= r; i++) {
      aux[i - l] = arr[i]
    }

    // merge
    let i: number = l
    let j: number = r
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j - l]
        j++
      } else if (j > r) {
        arr[k] = aux[i - l]
        i++
      }else if (aux[i - l] > aux[j - l]) {
        arr[k] = aux[j - l]
        j++
      } else {
        arr[k] = aux[i - l]
        i++
      }
    }
  }

  /**
   * Return the minimum value between x and y
   * @param x 
   * @param y 
   */
  private static __min (x: number, y: number): number {
    return x > y ? y : x
  }
}