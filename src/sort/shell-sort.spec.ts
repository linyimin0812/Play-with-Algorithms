import test from 'blue-tape'

import { SortTestHelper } from '../util/sort-test-helper'
import { InsertionSort } from './insertion-sort'
import { ShellSort } from './shell-sort'

const arr: number[] = SortTestHelper.generateRandomArray(10000, 0, 10000)
test('shellSort', async t => {
  const EXPECTED: boolean = true
  const arr1: number[]    = arr.slice(0)
  SortTestHelper.testComplexity('shellSort', ShellSort.shellSort, arr1)
  const result: boolean = SortTestHelper.isSorted(arr1)
  t.equal(result, EXPECTED, 'The arr1 should be sorted')
})

test('insertionSort', async t => {
  const EXPECTED: boolean = true
  const arr2: number[]    = arr.slice(0)
  SortTestHelper.testComplexity('selectionSort', InsertionSort.insertionSortOptimization, arr2)
  const result: boolean = SortTestHelper.isSorted(arr2)
  t.equal(result, EXPECTED, 'The arr2 should be sorted')
})
