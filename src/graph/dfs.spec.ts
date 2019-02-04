import test from 'blue-tape'
import { readGraph } from './read-graph';
import { DFS } from './dfs';

test('dfs()', async t => {
  const grap = await readGraph('./graph1.txt', 'sparse')
  const dfs  = new DFS(grap)
  const EXPECTED = '0 1 2 3 4 5 '
  dfs.dfs(0)
  t.equal(dfs.getResult(), EXPECTED)
})

test('dfs()', async t => {
  const grap = await readGraph('./graph1.txt', 'sparse')
  const dfs  = new DFS(grap)
  const EXPECTED = '1 0 2 5 3 4 '
  dfs.dfs(1)
  t.equal(dfs.getResult(), EXPECTED)
})