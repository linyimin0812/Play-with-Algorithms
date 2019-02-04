import test from 'blue-tape'
import { readGraph } from '../read-graph';
import { SparseGraphIterator } from './sparse-graph-iterator';
import { SparseGraph } from './sparse-graph';


test('begin()', async t => {
  const graph = await readGraph('./graph1.txt', 'sparse', false) as SparseGraph
  const adjIterator = new SparseGraphIterator(graph, 0)
  const EXPECTED = 1
  const result = adjIterator.begin()
  t.equal(result, EXPECTED)
})

test('next()', async t => {
  const graph = await readGraph('./graph1.txt', 'sparse', false) as SparseGraph
  const adjIterator = new SparseGraphIterator(graph, 0)
  const EXPECTED = '1,2,5,-1,'
  let result = ''
  while(! adjIterator.end()) {
    result += adjIterator.next() + ','
  }
  t.equal(result, EXPECTED)
})