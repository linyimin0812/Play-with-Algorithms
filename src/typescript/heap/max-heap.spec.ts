import test from 'blue-tape'
import { MaxHeap } from './max-heap'

/**
 * test MaxHeap insert function
 */
test("MaxHeap insert()", async t => {
  const maxHeap = new MaxHeap(10)

  const EXPECTED = [0, 9, 8, 5, 6, 7, 1, 4, 0, 3, 2]

  for (let i = 0; i < 10; i++) {
    maxHeap.insert(i)
  }
  const result = maxHeap.data

  t.deepEqual(result, EXPECTED, 'arr should be satisty the property with max heap')
})

/**
 * test MaxHeap size function
 */
test('MaxHeap size()', async t => {
  const maxHeap = new MaxHeap(10)

  for (let i = 0; i < 5; i++) {
    maxHeap.insert(i)
  }
  const EXPECTED = 5

  const result = maxHeap.size()

  t.equal(result, EXPECTED, 'The length of max heap should be 5')
})

/**
 * test MaxHeap isEmpty function
 */
test('MaxHeap isEmpty()', async t => {
  const maxHeap  = new MaxHeap(10)
  const EXPECTED = true
  let   result   = maxHeap.isEmpty()

  t.equal(result, EXPECTED, 'The max heap should be empty')

  for (let i = 0; i < 5; i++) {
    maxHeap.insert(i)
  }

  result = maxHeap.isEmpty()

  t.equal(result, false, 'The max heap should not be empty')

})

/**
 * test MaxHeap extractMax function
 */
// if the array satisfies the property of max heap, the extrac element should be ordered
test('MaxHeap extractMax()', async t => {
  const maxHeap = new MaxHeap(10)
  for (let i = 0; i < 10; i++) {
    maxHeap.insert(i)
  }

  const EXPECTED = '9,8,7,6,5,4,3,2,1,0,'
  let result = ''

  for (let i = 0; i < 10; i++) {
    result += maxHeap.extractMax() + ','
  }
  t.equal(result, EXPECTED, 'The extract element should be in order')
})