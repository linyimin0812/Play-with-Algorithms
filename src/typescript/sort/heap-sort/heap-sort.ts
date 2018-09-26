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