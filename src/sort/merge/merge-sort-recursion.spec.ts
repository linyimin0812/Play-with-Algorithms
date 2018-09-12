import { InsertionSort } from '../insertion/insertion-sort'

import { SortTestHelper } from '../../util/sort-test-helper'
import { MergeSortRecursion } from './merge-sort-recursion'

import test from 'blue-tape'

const arr: number[] = SortTestHelper.generateRandomNearlyOrderedArray(50000, 0)

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
    MergeSortRecursion.mergeSort,
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
    MergeSortRecursion.mergeSortOptimizationWithMerge,
    arr3,
  )

  const EXPECTED: boolean = true
  const result: boolean   = SortTestHelper.isSorted(arr3)
  t.equal(result, EXPECTED, 'The arr3 should be in order')
})

test('mergeSortOptimizationWithInsertionSort', async t => {
  // copy the sorted array
  const arr4: number[] = arr.slice(0)

  SortTestHelper.testComplexity(
    'mergeSortOptimizationWithInsertionSort',
    MergeSortRecursion.mergeSortOptimizationWithInsertionSort,
    arr4,
  )

  const EXPECTED: boolean = true
  const result: boolean   = SortTestHelper.isSorted(arr4)
  t.equal(result, EXPECTED, 'The arr4 should be in order')
})
