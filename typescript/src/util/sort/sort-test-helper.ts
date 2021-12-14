import { log } from 'brolog'
export class SortTestHelper {
  /**
   * Generate a random array which contains n elements, elements range from rangeL to rangeR
   * @param n The number of random array elements
   * @param rangeL The minimum value
   * @param rangeR The maximum value
   */
  public static generateRandomArray (n: number, rangeL: number, rangeR: number): number[] {
    if (rangeL > rangeR) {
      throw new Error('rangeL should be less than rangeR')
    }
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = Math.floor((Math.random() * (rangeR - rangeL + 1))) + rangeL
    }
    return arr
  }

  /**
   * To generate a nearly order array
   * @param n The number of random array element
   * @param swapTime The times want to swap, The smaller value of swapTime, the more order the array is
   */
  public static generateRandomNearlyOrderedArray (n: number, swapTime: number): number[] {
    const arr: number[] = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = i
    }
    for (let i = 0; i < swapTime; i++) {
      const x: number = Math.floor(Math.random() * n)
      const y: number = Math.floor(Math.random() * n)

      const temp: number = arr[x]
      arr  [x]           = arr[y]
      arr  [y]           = temp
    }
    return arr
  }

  /**
   * Judge the target array whether is in order
   * The order is from small to large
   * @param arr The tested array
   */
  public static isSorted (arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }

  /**
   * To calculate the time required for sorting
   * @param sortName The name of sort function
   * @param sort Sort funtion
   * @param arr The sorted array
   */
  public static testComplexity (sortName: string, sort: (data: number[]) => void, arr: number[]) {
    const start = Date.now()
    sort(arr)
    const end       = Date.now()
    const isOrdered = this.isSorted(arr)
    if (! isOrdered) {
      throw new Error('The array is not in order')
    }
    log.info('SortTestHelper', `${sortName} sorts array which contains ${arr.length} elements spending %s s`, (end - start) / 1000)
  }
}
