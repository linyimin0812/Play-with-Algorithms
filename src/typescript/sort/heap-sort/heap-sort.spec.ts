import test from 'blue-tape'
import { SortTestHelper } from '../../util/sort/sort-test-helper'
import { sort } from './heap-sort'

test('heap sort', async t => {
  const n = 1000000
  const arr = SortTestHelper.generateRandomArray(n, 0, n)

  // test sort()
  const arr1 = arr.slice(0)
  SortTestHelper.testComplexity('sort()', sort, arr1)

  const EXPECTED = true
  const result1 = SortTestHelper.isSorted(arr1)

  t.equal(result1, EXPECTED, 'arr1 should be rodered')

  // test sortOptimizationWithHeapify()
  const arr2 = arr.slice(0)
  SortTestHelper.testComplexity('sortOptimizationWithHeapify()', sort, arr2)

  const result2 = SortTestHelper.isSorted(arr2)

  t.equal(result2, EXPECTED, 'arr2 should be rodered')
})