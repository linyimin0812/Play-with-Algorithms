import { DenseGraph           } from '../dense-graph/dense-graph'
import { SparseGraph          } from '../sparse-graph/sparse-graph'
import { DenseGraphIterator   } from '../dense-graph/dense-graph-iterator'
import { SparseGraphIterator  } from '../sparse-graph/sparse-graph-iterator'

export class DFS {
  private graph    : DenseGraph | SparseGraph
  private isvisited: boolean[]
  private result   : string
  
  constructor (graph: DenseGraph | SparseGraph) {
    this.graph     = graph
    this.isvisited = new Array<boolean> (this.graph.V()).fill(false)
    this.result    = ''
  }
  public getResult () {
    return this.result
  }
   /**
   * 深度优先遍历
   * @param v 
   */
  public dfs(v: number) {
    this.isvisited[v] = true
    this.result += v + ' '
    let iterator: DenseGraphIterator | SparseGraphIterator
    if (this.graph instanceof DenseGraph) {
      iterator = new DenseGraphIterator(this.graph, v)
    } else {
      iterator = new SparseGraphIterator(this.graph, v)
    }
    for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
      if (!this.isvisited[i]) {
        this.dfs(i)
      }
    }
  }
}
