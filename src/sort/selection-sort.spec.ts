import test from 'blue-tape'

import { SortTestHelper } from '../util/sort-test-helper'
import { SelectionSort } from './selection-sort'

test('selectionSort', async t => {
  const EXPECTED: boolean = true
  const arr: number[]     = SortTestHelper.generateRandomArray(10000, 0, 10000)
  // SelectionSort.selectionSort(arr)
  SortTestHelper.testComplexity('selectionSort', SelectionSort.selectionSort, arr)
  const result: boolean = SortTestHelper.isSorted(arr)
  t.equal(result, EXPECTED, 'The arr should be sorted')
})
