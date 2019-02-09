import test from 'blue-tape'
import { readGraph } from './read-graph';

test('readGraph()', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'dense', true)
  const EXPECTED = '[[null,null,{"_from":0,"_to":2,"_weight":0.26},null,{"_from":0,"_to":4,"_weight":0.38},null,null,{"_from":0,"_to":7,"_weight":0.16}],[null,null,{"_from":1,"_to":2,"_weight":0.36},{"_from":1,"_to":3,"_weight":0.29},null,{"_from":1,"_to":5,"_weight":0.32},null,{"_from":1,"_to":7,"_weight":0.19}],[null,null,null,{"_from":2,"_to":3,"_weight":0.17},null,null,null,{"_from":2,"_to":7,"_weight":0.34}],[null,null,null,null,null,null,{"_from":3,"_to":6,"_weight":0.52},null],[null,null,null,null,null,{"_from":4,"_to":5,"_weight":0.35},null,{"_from":4,"_to":7,"_weight":0.37}],[null,null,null,null,null,null,null,{"_from":5,"_to":7,"_weight":0.28}],[{"_from":6,"_to":0,"_weight":0.58},null,{"_from":6,"_to":2,"_weight":0.4},null,{"_from":6,"_to":4,"_weight":0.93},null,null,null],[null,null,null,null,null,null,null,null]]'
  t.deepEqual(JSON.stringify(graph.g), EXPECTED)
})