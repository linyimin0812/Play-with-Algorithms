import { DenseGraph } from "../dense-graph/dense-graph";
import { SparseGraph } from "../sparse-graph/sparse-graph";
import { DenseGraphIterator } from "../dense-graph/dense-graph-iterator";
import { SparseGraphIterator } from "../sparse-graph/sparse-graph-iterator";

export class BFS {
  private graph: DenseGraph | SparseGraph
  private isVisited: boolean[]
  
  private queue: number[]
  
  constructor (graph: DenseGraph | SparseGraph) {
    this.graph = graph
    this.queue = new Array<number>()
    this.isVisited = new Array<boolean>(graph.V()).fill(false)
  }
  
  public bfs(v: number): string {
    this.isVisited[v] = true
    this.queue.push(v)
    let iterator: DenseGraphIterator | SparseGraphIterator
    let result = ''
    while(this.queue.length > 0) {
      const vertex = this.queue.shift()!
      result += vertex + ' '
      if (this.graph instanceof DenseGraph) {
        iterator = new DenseGraphIterator(this.graph, vertex)
      } else {
        iterator = new SparseGraphIterator(this.graph, vertex)      
      }
      for (let i = iterator.begin(); !iterator.end(); i = iterator.next()) {
        if (! this.isVisited[i]) {
          this.isVisited[i] = true
          this.queue.push(i)
        }
      }
    }
    return result
  }
}