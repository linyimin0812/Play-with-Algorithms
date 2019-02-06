import test from 'blue-tape'
import { readGraph } from '../read-graph';
import { BFS } from './bfs';

test('bfs()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense')
  
  const bfs: BFS = new BFS(graph)
  
  const result = bfs.bfs(0)
  
  t.equal(result, '0 1 2 5 3 4 ')
})