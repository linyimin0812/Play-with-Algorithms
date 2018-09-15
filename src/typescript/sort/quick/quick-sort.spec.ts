import test from 'blue-tape'
import { QuickSort } from './quick-sort'
import { SortTestHelper } from '../../util/sort-test-helper';

test('QuickSort', async t => {
  const n   = 10000000
  const arr = SortTestHelper.generateRandomArray(n, 0, n)
  SortTestHelper.testComplexity('quickSort', QuickSort.quickSort, arr)

  const EXPECTED = true
  const result   = SortTestHelper.isSorted(arr)

  t.equal(result, EXPECTED, 'arr should be in order')
})
