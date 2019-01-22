import test from 'blue-tape'
import { SortTestHelper } from '../../util/sort/sort-test-helper'
import { QuickSort } from '../../sort/quick/quick-sort'
import { getResult } from './find-the-bottom-M-elements-of-N-elements'

test('find the bottom M elements of N elements', async t => {
  const arr = SortTestHelper.generateRandomArray(1000000, 0, 1000000)
  const result = getResult(arr, 100)
  QuickSort.quickSort(arr)
  const EXPECT = arr.slice(0, 100)
  EXPECT.reverse()

  t.deepEqual(result, EXPECT, 'Get the bottom M elements of N elements')
})