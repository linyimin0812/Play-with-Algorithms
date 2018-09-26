import test from 'blue-tape'
import { SortTestHelper } from '../../util/sort/sort-test-helper'
import { sort, HeapSort } from './heap-sort'

const n = 1000000
const arr = SortTestHelper.generateRandomArray(n, 0, n)

/**
 * test heap sort which need auxiliry space
 */
test('heap sort', async t => {

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

/**
 * test heap sort which does not need any auxiliry space
 */

test('HeapSort', async t => {
  const arr3 = arr.slice(0)
  SortTestHelper.testComplexity('heapSort', HeapSort.heapSort, arr3)
  const EXPECTED = true

  const result = SortTestHelper.isSorted(arr3)

  t.equal(result, EXPECTED, 'arr3 should be in order')
})