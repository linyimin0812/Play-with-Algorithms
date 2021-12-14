import test from 'blue-tape'
import { readGraph } from '../read-graph';
import { ShortestPath } from './bfs-shortest-path';

test('shortestPath()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', true)
  
  const shortestPath: ShortestPath = new ShortestPath(graph)
  
  shortestPath.bfs(0)
  
  const result = shortestPath.getShortestPath(5)
  
  t.deepEqual(result, [0, 5])
})

test('shortestDistance()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', true)
  
  const shortestPath: ShortestPath = new ShortestPath(graph)
  
  shortestPath.bfs(0)
  
  const result = shortestPath.getShortestDistance(5)
  
  t.equal(result, 1)
})