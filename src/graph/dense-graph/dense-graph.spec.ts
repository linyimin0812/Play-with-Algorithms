import test                from 'blue-tape'

import { DenseGraph } from './dense-graph'


const graph = [
  [false, true, false, false],
  [true, false, true, true],
  [false, true, false, true],
  [false, true, true, false],
]

const denseGraph = new DenseGraph(4, false)

test('addEdge()', async t => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (graph[i][j]) {
        denseGraph.addEdge(i, j)
      }
    }
  }
})
test ('V()', async t => {
  const EXPECTED = denseGraph.V()
  
  t.equal(4, EXPECTED, 'The number of vertex is 4')
})

test ('E()', async t => {
  const EXPECTED = denseGraph.E()
  
  t.equal(4, EXPECTED, 'The number of edge should be 4')
})


test ('hasEged()', async t => {
  let EXPECTED = denseGraph.hasEdge(0, 1)
  t.equal(true, EXPECTED, '0 and 1 should be connected')
  
  EXPECTED = denseGraph.hasEdge(0, 2)
  t.equal(false, EXPECTED, '0 and 2 shoule not be connected')
})
