import test from 'blue-tape'
import { SortTestHelper } from '../util/sort-test-helper'
import { BubbleSort } from './bubble-sort'

test ('bubbleSort', async t => {
  const arr: number[] = SortTestHelper.generateRandomArray(10000, 0, 10000)

  SortTestHelper.testComplexity('bubbleSort', BubbleSort.bubbleSort, arr)

  const EXPECTED: boolean = true

  const result: boolean = SortTestHelper.isSorted(arr)

  t.equal(result, EXPECTED, 'The arr should be in order')
})
