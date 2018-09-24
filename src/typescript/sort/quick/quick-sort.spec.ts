import test from 'blue-tape'
import { QuickSort, QuickSortOptimization1, QuickSort2Way, QuickSort3Way } from './quick-sort'
import { SortTestHelper } from '../../util/sort-test-helper'

const n   = 100000

// a random array
const arr = SortTestHelper.generateRandomArray(n, 0, n)

// a nearly order arrray
const arrNearlyOrder = SortTestHelper.generateRandomNearlyOrderedArray(n, 100)

// a large number of duplicate elements array
const arrMostDuplicate = SortTestHelper.generateRandomArray(n, 0, 100)

// quick sort general implementation
test('QuickSort', async t => {

  // test random array
  const arr1 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr1)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr1)
  t.equal(result1, EXPECTED, 'Random arr1 should be in order')

  // test nearly ordered array
  const arr2 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr2)

  const result2   = SortTestHelper.isSorted(arr2)
  t.equal(result2, EXPECTED, 'Nearly order arr2 should be in order')

  // test array which contains large number of duplicate elements
  const arr3 = arrMostDuplicate.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr3)

  const result3   = SortTestHelper.isSorted(arr3)
  t.equal(result3, EXPECTED, 'most duplicate elements arr3 should be in order')
})

// quick sort implementation with a random element 
test('QuickSortOptimization1', async t => {

  // test random array
  const arr4 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSortOptimization1.quickSort, arr4)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr4)
  t.equal(result1, EXPECTED, 'Random arr4 should be in order')

  // test nearly ordered array
  const arr5 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSortOptimization1.quickSort, arr5)

  const result2   = SortTestHelper.isSorted(arr5)
  t.equal(result2, EXPECTED, 'Nearly order arr5 should be in order')

  // test array which contains a large number of duplicate elements
  const arr6 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSortOptimization1.quickSort, arr6)

  const result3   = SortTestHelper.isSorted(arr6)
  t.equal(result3, EXPECTED, 'Nearly order arr6 should be in order')
})


// quick sort implementation with 2 ways
test('QuickSortWith2Way', async t => {

  // test random array
  const arr7 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort2Way.quickSort, arr7)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr7)
  t.equal(result1, EXPECTED, 'Random arr7 should be in order')

  // test nearly ordered array
  const arr8 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort2Way.quickSort, arr8)

  const result2   = SortTestHelper.isSorted(arr8)
  t.equal(result2, EXPECTED, 'Nearly order arr8 should be in order')

  // test array which contains a large number of duplicate elements
  const arr9 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort2Way.quickSort, arr9)

  const result3   = SortTestHelper.isSorted(arr9)
  t.equal(result3, EXPECTED, 'Nearly order arr9 should be in order')
})

// quick sort implementation with 3 ways
test('QuickSortWith3Way', async t => {

  // test random array
  const arr10 = arr.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort3Way.quickSort, arr10)

  const EXPECTED = true
  const result1   = SortTestHelper.isSorted(arr10)
  t.equal(result1, EXPECTED, 'Random arr10 should be in order')

  // test nearly ordered array
  const arr11 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort3Way.quickSort, arr11)

  const result2   = SortTestHelper.isSorted(arr11)
  t.equal(result2, EXPECTED, 'Nearly order arr11 should be in order')

  // test array which contains a large number of duplicate elements
  const arr12 = arrNearlyOrder.slice(0)
  SortTestHelper.testComplexity('quickSort', QuickSort3Way.quickSort, arr12)

  const result3   = SortTestHelper.isSorted(arr12)
  t.equal(result3, EXPECTED, 'Nearly order arr12 should be in order')
})


