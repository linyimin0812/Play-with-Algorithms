import test                     from 'blue-tape'
import { readGraph            } from './read-graph'
import { DirectedAcyclicGraph } from './directed-acyclic-graph'

test('isDAG()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', true)
  const isDAG = new DirectedAcyclicGraph(graph)
  
  t.equal(isDAG.getResult(), true)
})

test('isDAG()', async t => {
  const graph = await readGraph('./graph-example/graph3.txt', 'dense', true)
  const isDAG = new DirectedAcyclicGraph(graph)
  
  t.equal(isDAG.getResult(), false)
})