import test                from 'blue-tape'
import { BST } from './binary-search-tree'

const bst = new BST()

test ('BST insert', async t => {
  const elemnets = ['3', '2', '4', '8', '6', '1', '9', '5', '7', '0']
  for (let i = 0; i < elemnets.length; i++) {
    bst.insert(elemnets[i], i + '')
  }
  bst.inOrder()
})
