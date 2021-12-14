import { Edge         } from '../edge'
import { AdjIterator  } from '../iterator'
import { DenseGraph   } from './dense-graph'

export class DenseGraphIterator implements AdjIterator {
  private v    : number
  private graph: DenseGraph
  private index: number
  
  constructor(graph: DenseGraph, v: number) {
    this.v     = v
    this.graph = graph
    this.index = -1
  }
  // 返回图中与顶点v相连接的第一个边
  public begin(): Edge | null {
    this.index = -1
    return this.next()
  }
  // 返回图中与顶点v相连接的下一个边
  public next(): Edge | null {
    for (this.index += 1; this.index < this.graph.g[this.v].length; this.index++) {
      if (this.graph.g[this.v][this.index]) {
        return this.graph.g[this.v][this.index]
      }
    }
    return null
  }
  /**
   * 查看是否已经迭代完了图中与顶点v相连接的所有边
   */
  public end(): boolean {
    return this.index >= this.graph.g[this.v].length
  }
}