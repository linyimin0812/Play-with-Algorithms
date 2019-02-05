import test from 'blue-tape'
import { readGraph } from './read-graph';
import { GraphPath } from './path';

test('hasPath()', async t => {
  const graph = await readGraph('./graph1.txt', 'sparse')
  
  const pathGraph = new GraphPath(graph, 0)
  
  t.equal(pathGraph.hasPath(5), true)
})

test('path()', async t => {
  const graph = await readGraph('./graph1.txt', 'sparse')
  
  const pathGraph = new GraphPath(graph, 0)
  
  t.deepEqual(pathGraph.path(5), [0, 1, 3, 5])
  t.deepEqual(pathGraph.path(4), [0, 1, 3, 4])
  t.deepEqual(pathGraph.path(3), [0, 1, 3])
  t.deepEqual(pathGraph.path(2), [0, 1, 2])
  t.deepEqual(pathGraph.path(1), [0, 1])
  t.deepEqual(pathGraph.path(0), [0])
})