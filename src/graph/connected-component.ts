import { DenseGraph           } from './dense-graph/dense-graph'
import { SparseGraph          } from './sparse-graph/sparse-graph'
import { DenseGraphIterator   } from './dense-graph/dense-graph-iterator'
import { SparseGraphIterator  } from './sparse-graph/sparse-graph-iterator'

/**
 * 获取连通分量的个数
 */

export class ConnectedComponent {
  private count: number
  private isVisited: boolean[]
  private graph: DenseGraph | SparseGraph
  
  // 标识节点属于哪个连通分量
  private component: number[]
  
  constructor (graph: DenseGraph| SparseGraph) {
    this.count     = 0
    this.graph     = graph
    this.isVisited = new Array<boolean>(graph.V()).fill(false)
    this.component = new Array<number> (graph.V()).fill(-1)
    
    for (let i = 0; i < this.graph.V(); i++) {
      if (!this.isVisited[i]) {
        this.dfs(i)
        this.count++
      }
    }
  }
  
  public getResult() {
    return this.count
  }
  
  public isConnected(v: number, w: number): boolean {
    return (this.component[v] === this.component[w]) && (this.component[v] !== -1)
  }
  /**
   * 深度优先遍历
   * @param vertex 
   */
  public dfs(vertex: number) {
    let iterator
    if (this.graph instanceof DenseGraph) {
      iterator = new DenseGraphIterator(this.graph, vertex)
    } else {
      iterator = new SparseGraphIterator(this.graph, vertex)      
    }
    this.isVisited[vertex] = true
    this.component[vertex] = this.count
    for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
      if (!this.isVisited[i]) {
        this.dfs(i)
      }
    }
  }
}