import { InsertionSort } from './insertion-sort'

import { SortTestHelper } from '../util/sort-test-helper'
import { MergeSort } from './merge-sort'

import test from 'blue-tape'

const arr: number[] = SortTestHelper.generateRandomNearlyOrderedArray(100000, 0)

test ('insertionSortOptimization', async t => {
  const EXPECTED: boolean = true
  // copy the sorted array
  const arr1: number[] = arr.slice(0)
  SortTestHelper.testComplexity(
    'insertionSortOptimization',
    InsertionSort.insertionSortOptimization,
    arr1
  )

  const result = SortTestHelper.isSorted(arr1)
  t.equal(result, EXPECTED, 'The arr1 should be sorted')
})

test('mergeSort', async t => {
  // copy the sorted array
  const arr2: number[] = arr.slice(0)

  SortTestHelper.testComplexity(
    'mergeSort',
    MergeSort.mergeSort,
    arr2,
  )

  const EXPECTED: boolean = true
  const result: boolean   = SortTestHelper.isSorted(arr2)
  t.equal(result, EXPECTED, 'The arr2 should be in order')
})

test('mergeSortOptimizationWithMerge', async t => {
  // copy the sorted array
  const arr3: number[] = arr.slice(0)

  SortTestHelper.testComplexity(
    'mergeSortOptimizationWithMerge',
    MergeSort.mergeSortOptimizationWithMerge,
    arr3,
  )

  const EXPECTED: boolean = true
  const result: boolean   = SortTestHelper.isSorted(arr3)
  t.equal(result, EXPECTED, 'The arr3 should be in order')
})

