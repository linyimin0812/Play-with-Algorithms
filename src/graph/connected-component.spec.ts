import test from 'blue-tape'
import { readGraph } from './read-graph';
import { ConnectedComponent } from './connected-component';

test('connencted component', async t => {
  const graph = await readGraph('./connected-component-graph.txt', 'dense')
  const component = new ConnectedComponent(graph)
  const EXPECTED = 2
  t.equal(component.getResult(), EXPECTED)
})

test('isConnected', async t => {
  const graph = await readGraph('./connected-component-graph.txt', 'dense')
  const component = new ConnectedComponent(graph)
  t.equal(component.isConnected(1,6), false)
  t.equal(component.isConnected(1,0), true)
  
})