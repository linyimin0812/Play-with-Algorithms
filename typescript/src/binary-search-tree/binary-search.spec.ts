import test                from 'blue-tape'
import { SortTestHelper  } from '../util/sort/sort-test-helper'
import { BinarySearch    } from './binary-search'

test ('binary search test', async t => {
  const arr      = SortTestHelper.generateRandomNearlyOrderedArray(100000, 0)
  const EXPECTED = 667
  const result   = BinarySearch.binarySearch(arr, 667)
  t.equal(result, EXPECTED, 'binary search get the target element')
})

test ('binary search test', async t => {
  const arr      = SortTestHelper.generateRandomNearlyOrderedArray(100000, 0)
  const EXPECTED = -1
  const result   = BinarySearch.binarySearch(arr, 100000)
  t.equal(result, EXPECTED, `binary search can't get the target element`)
})

test ('binary search implement with recursive test', async t => {
  const arr      = SortTestHelper.generateRandomNearlyOrderedArray(100000, 0)
  const EXPECTED = 667
  const result   = BinarySearch.binarySearchImplementWithRecursive(arr, 667)
  t.equal(result, EXPECTED, 'binary search get the target element')
})

test ('binary search implement with recursive test', async t => {
  const arr      = SortTestHelper.generateRandomNearlyOrderedArray(100000, 0)
  const EXPECTED = -1
  const result   = BinarySearch.binarySearchImplementWithRecursive(arr, 100000)
  t.equal(result, EXPECTED, `binary search can't get the target element`)
})