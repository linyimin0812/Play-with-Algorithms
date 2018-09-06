import { InsertionSort } from './insertion-sort'

import { SortTestHelper } from '../util/sort-test-helper'

import test from 'blue-tape'

const arr: number[] = SortTestHelper.generateRandomArray(100000, 0, 100000)

test ('insertionSort', async t => {
  const EXPECTED: boolean = true
  // copy the sorted array
  const arr1: number[] = arr.slice(0)
  SortTestHelper.testComplexity('insertionSort', InsertionSort.insertionSort, arr1)
  const result = SortTestHelper.isSorted(arr1)
  t.equal(result, EXPECTED, 'The arr1 should be sorted')
})

test ('insertionSortOptimization', async t => {
  const EXPECTED: boolean = true
  // copy the sorted array
  const arr2: number[] = arr.slice(0)
  SortTestHelper.testComplexity(
    'insertionSortOptimization',
    InsertionSort.insertionSortOptimization,
    arr2
  )

  const result = SortTestHelper.isSorted(arr2)
  t.equal(result, EXPECTED, 'The arr2 should be sorted')
})

test('insertionSortOptimization', async t => {
  // copy the sorted array
  const arr3: number[] = SortTestHelper.generateRandomNearlyOrderedArray(100000, 5)

  SortTestHelper.testComplexity(
    'insertionSortOptimization',
    InsertionSort.insertionSortOptimization,
    arr3,
  )

  const EXPECTED: boolean = true
  const result: boolean = SortTestHelper.isSorted(arr3)
  t.equal(result, EXPECTED, 'The arr3 should be in order')
})
