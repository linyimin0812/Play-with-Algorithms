import test from 'blue-tape'
import { readGraph } from '../read-graph';

test('SparseGraph', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'sparse', true)
  
  const EXPECTED = '[[{"_from":0,"_to":7,"_weight":0.16},{"_from":0,"_to":4,"_weight":0.38},{"_from":0,"_to":2,"_weight":0.26}],[{"_from":1,"_to":5,"_weight":0.32},{"_from":1,"_to":7,"_weight":0.19},{"_from":1,"_to":2,"_weight":0.36},{"_from":1,"_to":3,"_weight":0.29}],[{"_from":2,"_to":3,"_weight":0.17},{"_from":2,"_to":7,"_weight":0.34}],[{"_from":3,"_to":6,"_weight":0.52}],[{"_from":4,"_to":5,"_weight":0.35},{"_from":4,"_to":7,"_weight":0.37}],[{"_from":5,"_to":7,"_weight":0.28}],[{"_from":6,"_to":2,"_weight":0.4},{"_from":6,"_to":0,"_weight":0.58},{"_from":6,"_to":4,"_weight":0.93}],[]]'
  
  t.equal(JSON.stringify(graph.g), EXPECTED)
})