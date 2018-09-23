import test from 'blue-tape'
import { QuickSort, QuickSortOptimization1 } from './quick-sort'
import { SortTestHelper } from '../../util/sort-test-helper';

const n   = 1000000
const arr = SortTestHelper.generateRandomArray(n, 0, n)

const arrNearlyOrder = SortTestHelper.generateRandomNearlyOrderedArray(n, 1000)

test('QuickSort', async t => {

  const arr1 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr1)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr1)
  t.equal(result1, EXPECTED, 'Random arr1 should be in order')

  const arr2 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr2)

  const result2   = SortTestHelper.isSorted(arr2)
  t.equal(result2, EXPECTED, 'Nearly order arr2 should be in order')
})

test('QuickSortOptimization1', async t => {

  const arr3 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSortOptimization1.quickSort, arr3)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr3)
  t.equal(result1, EXPECTED, 'Random arr3 should be in order')

  const arr4 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSortOptimization1.quickSort, arr4)

  const result2   = SortTestHelper.isSorted(arr4)
  t.equal(result2, EXPECTED, 'Nearly order arr4 should be in order')
})


