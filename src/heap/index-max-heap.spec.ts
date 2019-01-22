import test from 'blue-tape'
import { IndexMaxHeap } from './index-max-heap'

const ARR = [15, 17, 19, 13, 22, 16, 28, 30, 41, 62] 

/**
 * test IndexMaxHeap insert function
 */
test("IndexMaxHeap insert()", async t => {
  const indexMaxHeap = new IndexMaxHeap(ARR.length)

  const EXPECTED = [0, 10, 9, 5, 7, 8, 6, 2, 4, 3, 1]

  for (let i = 0; i < ARR.length; i++) {
    indexMaxHeap.insert(ARR[i])
  }

  t.deepEqual(indexMaxHeap.indexes, EXPECTED, 'arr should be satisty the property with max heap')
})

/**
 * test IndexMaxHeap size function
 */
test('IndexMaxHeap size()', async t => {
  const indexMaxHeap = new IndexMaxHeap(ARR.length)

  for (let i = 0; i < ARR.length; i++) {
    indexMaxHeap.insert(ARR[i])
  }
  const EXPECTED = ARR.length

  const result = indexMaxHeap.size()

  t.equal(result, EXPECTED, `The length of max heap should be ${ARR.length}`)
})

/**
 * test IndexMaxHeap isEmpty function
 */
test('IndexMaxHeap isEmpty()', async t => {
  const indexMaxHeap  = new IndexMaxHeap(ARR.length)
  const EXPECTED = true
  let   result   = indexMaxHeap.isEmpty()

  t.equal(result, EXPECTED, 'The max heap should be empty')

  for (let i = 0; i < ARR.length; i++) {
    indexMaxHeap.insert(ARR[i])
  }

  result = indexMaxHeap.isEmpty()

  t.equal(result, false, 'The max heap should not be empty')

})

/**
 * test IndexMaxHeap extractMax function
 */
// if the array satisfies the property of max heap, the extrac element should be ordered
test('IndexMaxHeap extractMax()', async t => {
  const indexMaxHeap = new IndexMaxHeap(10)
  for (let i = 0; i < ARR.length; i++) {
    indexMaxHeap.insert(ARR[i])
  }

  const EXPECTED = '62,41,30,28,22,19,17,16,15,13,'
  let result = ''

  for (let i = 0; i < 10; i++) {
    result += indexMaxHeap.extractMax() + ','
  }
  t.equal(result, EXPECTED, 'The extract element should be in order')
})