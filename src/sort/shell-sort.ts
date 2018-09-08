import { log } from 'brolog'
export class ShellSort {
  /**
   * The implementation of shell sort
   * @param arr The sorted array
   */
  public static shellSort (arr: number[]) {
    // Calculate increment sequence 1, 4, 13, 40, 121, 364, 1093
    let h: number = 1
    while (h < arr.length / 3) {
      h = 3 * h + 1
    }
    while (h >= 1) {
      // h-sort the array
      for (let i = h; i < arr.length; i++) {
        let j: number = i
        const currentValue: number = arr[i]
        for (j = i; j >= h; j -= h) {
          if (currentValue < arr[j - h]) {
            arr[j] = arr[j - h]
          }
        }
        arr[j] = currentValue
      }
      h = Math.floor(h / 3)
    }
  }
}
