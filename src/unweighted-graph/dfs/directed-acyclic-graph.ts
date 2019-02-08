import { DenseGraph           } from '../dense-graph/dense-graph'
import { SparseGraph          } from '../sparse-graph/sparse-graph'
import { DenseGraphIterator   } from '../dense-graph/dense-graph-iterator'
import { SparseGraphIterator  } from '../sparse-graph/sparse-graph-iterator'

export class DirectedAcyclicGraph {
  private graph: DenseGraph | SparseGraph
  private isVisited: number[]
  private isDAG: boolean
  
  constructor (graph: DenseGraph | SparseGraph) {
    this.graph     = graph
    this.isDAG     = true
    this.isVisited = new Array<number>(graph.V()).fill(-1)
    this.dfs(0)
  }
  
  public getResult(): boolean {
    return this.isDAG
  }
  
  public dfs(v: number) {
    this.isVisited[v] = 0
    let iterator: DenseGraphIterator | SparseGraphIterator
    if (this.graph instanceof DenseGraph) {
      iterator = new DenseGraphIterator(this.graph, v)
    } else {
      iterator = new SparseGraphIterator(this.graph, v)
    }
    for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
      if (this.isVisited[i] === 0) {
        this.isDAG = false
        break
      }
      if (this.isVisited[i] === -1) {
        this.dfs(i)
      }
    }
    this.isVisited[v] = 1
  }
}