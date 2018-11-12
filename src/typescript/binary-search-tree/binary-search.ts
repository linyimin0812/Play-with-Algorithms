

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

  static binarySearchImplementWithRecursive (arr: number[], target: number): number {
    return this.__compare(arr, 0, arr.length - 1, target)
  }

  private static __compare (arr: number[], l: number, r: number, target:number): number {
    if (l > r) {
      return -1
    }
    let mid = l + Math.floor((r - l)/2)
    if (target === arr[mid]) {
      return mid
    }
    if (target > arr[mid]) {
      return this.__compare(arr, mid+1, r, target)
    }

    return this.__compare(arr, l, mid-1, target)
  }
}