import { DenseGraph           } from './dense-graph/dense-graph'
import { SparseGraph          } from './sparse-graph/sparse-graph'
import { DenseGraphIterator   } from './dense-graph/dense-graph-iterator'
import { SparseGraphIterator  } from './sparse-graph/sparse-graph-iterator'

export class GraphPath {
  private graph: DenseGraph | SparseGraph
  private s        : number     // 路径起始节点
  private isVisited: boolean[]
  private from     : number[]   // 值对应的是索引的上游节点
  
  constructor (graph: DenseGraph | SparseGraph, s: number) {
    this.s         = s
    this.graph     = graph
    this.isVisited = new Array<boolean>(graph.V()).fill(false)
    this.from      = new Array<number>(graph.V()).fill(-1)
    this.dfs(this.s)
  }
  
  public path(w: number): number[] {
    const stack = new Array<number>()
    const result = new Array<number> ()
    let p = w
    while (p != -1) {
      stack.push(p)
      p = this.from[p]
    }
    console.log(stack)
    while (stack.length > 0) {
      result.push(stack.pop()!)
    }
    return result
  } 
  
  public hasPath(w: number): boolean {
    return this.from[w] > -1
  }
  
  /**
   * 深度优先遍历
   * @param v 
   */
  public dfs(v: number) {
    this.isVisited[v] = true
    let iterator: DenseGraphIterator | SparseGraphIterator
    if (this.graph instanceof DenseGraph) {
      iterator = new DenseGraphIterator(this.graph, v)
    } else {
      iterator = new SparseGraphIterator(this.graph, v)      
    }
    for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
      if (!this.isVisited[i]) {
        this.from[i] = v
        this.dfs(i)
      }
    }
  }
}