import { MaxHeap } from '../../heap/max-heap'

export function sort(arr: number[]) {
  const n = arr.length
  const maxHeap = new MaxHeap(n)
  for (let i = 0; i < n; i++) {
    maxHeap.insert(arr[i])
  }
  for (let i = n-1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
}

export function sortOpitimizationWithHeapify(arr: number[]) {
  const n = arr.length
  const maxHeap = new MaxHeap(arr)
  for (let i = n-1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
}

export class HeapSort {
  public static heapSort(arr: number[]) {
    const n = arr.length
    // heapify
    for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
      HeapSort.shiftDown(arr, n, i)
    }

    // sort
    for (let i = n - 1; i > 0; i--) {
      HeapSort.swap(arr, 0, i)
      HeapSort.shiftDown(arr, i, 0)
    }
  }
  
  private static shiftDown(arr: number[], n: number, index: number) {
  
    while (index * 2 + 1 < n) {
      let j = index * 2 + 1
      if (j + 1 < n && arr[j] < arr[j+1]) {
        j += 1
      }
      if (arr[index] < arr[j]) {
        HeapSort.swap(arr, index, j)
        index = j
      } else {
        break
      }
    }
  }

  private static swap(arr: number[], i: number, j:number) {
    const temp = arr[i]
    arr  [i]   = arr[j]
    arr  [j]   = temp
  }
}