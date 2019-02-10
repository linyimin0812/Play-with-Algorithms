import test from 'blue-tape'
import { readGraph } from '../read-graph';
import { DenseGraphIterator } from './dense-graph-iterator';
import { DenseGraph } from './dense-graph';

test('dense-graph-iterator', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense')
  const iterator = new DenseGraphIterator(<DenseGraph>graph, 0)
  let result = ''
  let edge = iterator.begin()
  while(! iterator.end() && edge) {
    result += edge.another(0) + ' '
    edge = iterator.next()
  }
  const EXPECTED = '2 4 6 7 '
  t.equal(result, EXPECTED)
})