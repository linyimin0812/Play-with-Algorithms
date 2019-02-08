import { DenseGraph } from "../dense-graph/dense-graph";
import { SparseGraph } from "../sparse-graph/sparse-graph";
import { DenseGraphIterator } from "../dense-graph/dense-graph-iterator";
import { SparseGraphIterator } from "../sparse-graph/sparse-graph-iterator";

export class ShortestPath {
  private graph: DenseGraph | SparseGraph
  private isVisited: boolean[]
  private from: number[]
  private order: number[]
  
  constructor(graph: DenseGraph | SparseGraph) {
    this.graph     = graph
    this.from      = new Array<number>(graph.V()).fill(-1)
    this.order     = new Array<number>(graph.V()).fill(-1)
    this.isVisited = new Array<boolean>(graph.V()).fill(false)
  }
  
  public getShortestPath(w: number): number[] {
    const statck = new Array<number>()
    const result = new Array<number>()
    
    let p = w
    while(p != -1) {
      statck.push(p)
      p = this.from[p]
    }
    
    while(statck.length > 0) {
      result.push(statck.pop()!)
    }
    
    return result
  }
  
  public getShortestDistance(v: number): number {
    return this.order[v]
  }
  
  public bfs(v: number) {
    const          queue = new Array<number>()
    this.isVisited[v]    = true
    this.order    [v]    = 0
    queue.push(v)
    while(queue.length > 0) {
      v = queue.shift()!
      let iterator: DenseGraphIterator | SparseGraphIterator
      if (this.graph instanceof DenseGraph) {
        iterator = new DenseGraphIterator(this.graph, v)
      } else {
        iterator = new SparseGraphIterator(this.graph, v)        
      }
      for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
        if (!this.isVisited[i]) {
          this.isVisited[i] = true
          this.from     [i] = v
          this.order    [i] = this.order[v] + 1
          queue.push(i)
        }
      }
    }
  }
  
}