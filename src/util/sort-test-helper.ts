export class SortTestHelper {
  /**
   * Generate a random array which contains n elements, elements range from rangeL to rangeR
   * @param n The number of random array elements
   * @param rangeL The minimum value
   * @param rangeR The maximum value
   */
  static generateRandomArray (n: number, rangeL: number, rangeR: number): number[] {
    if (rangeL > rangeR) {
      throw new Error('rangeL should be less than rangeR')
    }
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = (Math.random() * Number.MAX_VALUE) % (rangeR - rangeL + 1) + rangeL
    }
    return arr
  }

  /**
   * Judge the target array whether is in order
   * @param arr The tested array
   */
  static isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }

  static testComplexity(sortName: string, sort: (data: number[]) => void, arr: number[]) {
  }
}