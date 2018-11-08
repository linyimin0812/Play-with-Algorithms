import { MaxHeap } from '../max-heap'

function getBottomMElements(arr: number[], m: number): MaxHeap {
  const maxHeap: MaxHeap = new MaxHeap(m + 1)
  for (let i = 0; i < arr.length && i < m; i++) {
    maxHeap.insert(arr[i])
  }
  for (let i = m; i < arr.length; i++) {
    maxHeap.insert(arr[i])
    maxHeap.extractMax()
  }
  return maxHeap
}

export const getResult = function (arr: number[], m: number): number[] {
  const heap: MaxHeap = getBottomMElements(arr, m)
  const result: number[] = new Array<number>()
  for (let i = 0; i < m; i++) {
    const element = heap.extractMax()
    result.push(element)
  }
  return result
}