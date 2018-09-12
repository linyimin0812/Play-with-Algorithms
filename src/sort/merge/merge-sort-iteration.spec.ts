import test from 'blue-tape'
import { SortTestHelper } from '../../util/sort-test-helper';
import { MergeSortItetation } from './merge-sort-iteration';

test('MergeSortIteration', async t => {
  const EXPECTED: boolean = true
  const arr: number[] = SortTestHelper.generateRandomArray(100000, 0, 100000)
  SortTestHelper.testComplexity('mergeSortIteration', MergeSortItetation.mergeSort, arr)
  const result = SortTestHelper.isSorted(arr)

  t.equal(result, EXPECTED, 'the arr should be in order')
})