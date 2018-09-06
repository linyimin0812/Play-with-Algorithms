import { InsertionSort } from './insertion-sort'

import { SortTestHelper } from '../util/sort-test-helper'

import test from 'blue-tape'

const arr: number[] = SortTestHelper.generateRandomArray(10000, 0, 10000)

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
