import test                     from 'blue-tape'
import { readGraph            } from '../read-graph'
import { SparseGraph          } from './sparse-graph'
import { SparseGraphIterator  } from './sparse-graph-iterator'

test('sparse-graph-iterator', async t => {
  const graph = await readGraph('./graph-example/graph1.txt', 'sparse')
  const iterator = new SparseGraphIterator(<SparseGraph>graph, 0)
  let edge = iterator.begin()
  let result = ''
  while(! iterator.end() && edge) {
    result += edge.another(0) + ' '
    edge = iterator.next()
  }
  
  t.equal(result, '7 4 2 6 ')
})