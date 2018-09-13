import test  from 'blue-tape'

import {
 SortTestHelper
}                           from './sort-test-helper'
test('generateRandomArray', async t => {
  const TEXT: number[]    = SortTestHelper.generateRandomArray(10, 0, 10)
  const EXPECTED: boolean = true
  let   reuslt: boolean   = true
  for (let i = 1; i < TEXT.length; i++) {
    if (TEXT[i] < 0
      || TEXT[i] > 10
      || TEXT[i - 1] < 0
      || TEXT[i - 1] > 10) {
      reuslt = false
      break
    }
  }
  t.deepEqual(reuslt, EXPECTED, 'should generate a random array, whoes value is bettwen 0 and 10')
})
test('isSorted', async t => {
  const arr: number[]     = [1, 2, 3, 4, 5]
  const EXPECTED: boolean = true
  const result: boolean   = SortTestHelper.isSorted(arr)
  t.equal(result, EXPECTED, 'The arr should be sorted')
})

test('isSorted', async t => {
  const arr: number[]     = [5, 2, 1, 4, 5]
  const EXPECTED: boolean = false
  const result: boolean   = SortTestHelper.isSorted(arr)
  t.equal(result, EXPECTED, 'The arr should not be sorted')
})

test('generateRandomNearlyOrderedArray', async t => {
  const arr: number[] = SortTestHelper.generateRandomNearlyOrderedArray(10, 0)
  const EXPECTED: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  t.deepEqual(arr, EXPECTED, 'generateRandomNearlyOrderedArray generate a ordered array')
})
