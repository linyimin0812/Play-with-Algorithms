import test from 'blue-tape'
import { readGraph } from '../read-graph';
import { DenseGraphIterator } from './dense-graph-iterator';
import { DenseGraph } from './dense-graph';


test('begin()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', false) as DenseGraph
  const adjIterator = new DenseGraphIterator(graph, 0)
  const EXPECTED = 1
  const result = adjIterator.begin()
  t.equal(result, EXPECTED)
})

test('next()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', false) as DenseGraph
  const adjIterator = new DenseGraphIterator(graph, 0)
  const EXPECTED = '1,2,5,-1,'
  let result = ''
  while(! adjIterator.end()) {
    result += adjIterator.next() + ','
  }
  t.equal(result, EXPECTED)
})