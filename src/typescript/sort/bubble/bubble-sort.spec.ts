import test from 'blue-tape'
import { SortTestHelper } from '../../util/sort/sort-test-helper'
import { BubbleSort } from './bubble-sort'

// Generate a ordered array
const orderedArr: number[] = SortTestHelper.generateRandomNearlyOrderedArray(10000, 0)

const nearlyOrderedArr: number[] = SortTestHelper.generateRandomNearlyOrderedArray(10000, 10)

test ('bubbleSort', async t => {

  const arr1: number[] = orderedArr.slice(0)
  SortTestHelper.testComplexity('bubbleSort', BubbleSort.bubbleSort, arr1)

  const EXPECTED: boolean = true

  const result: boolean = SortTestHelper.isSorted(arr1)

  t.equal(result, EXPECTED, 'The arr1 should be in order')
})

test ('bubbleSortOptimization', async t => {
  const arr2: number[]    = orderedArr.slice(0)
  const EXPECTED: boolean = true

  SortTestHelper.testComplexity(
    'bubbleSortOptimization',
    BubbleSort.bubbleSortOptimization,
    arr2
  )
  const result: boolean = SortTestHelper.isSorted(arr2)

  t.equal(result, EXPECTED, 'The arr2 should be in order')
})

test ('bubbleSort', async t => {

  const arr3: number[] = nearlyOrderedArr.slice(0)
  SortTestHelper.testComplexity('bubbleSort', BubbleSort.bubbleSort, arr3)

  const EXPECTED: boolean = true

  const result: boolean = SortTestHelper.isSorted(arr3)

  t.equal(result, EXPECTED, 'The arr3 should be in order')
})

test ('bubbleSortOptimization', async t => {
  const arr4: number[]    = nearlyOrderedArr.slice(0)
  const EXPECTED: boolean = true

  SortTestHelper.testComplexity(
    'bubbleSortOptimization',
    BubbleSort.bubbleSortOptimization,
    arr4
  )
  const result: boolean = SortTestHelper.isSorted(arr4)

  t.equal(result, EXPECTED, 'The arr4 should be in order')
})
