

export class BinarySearch {
  /**
   * Binary search a target element in a sorted array
   * If the target element not exists, return -1 
   * or return the index of target element in the sorted array
   * @param arr 
   * @param target 
   */
  static binarySearch (arr: number[], target: number): number {
    let l = 0
    let r = arr.length - 1
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2)
      if (target === arr[mid]) {
        return mid
      }

      if (target > arr[mid]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return -1
  }
}