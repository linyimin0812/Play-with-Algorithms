import { AdjIterator  } from '../iterator'
import { DenseGraph   } from './dense-graph'

/**
 * 遍历邻边
 */

export class DenseGraphIterator implements AdjIterator{
  // 稠密图
  private graph: DenseGraph
  private g: boolean[][]
  private vertex: number
  private index: number
  constructor (graph: DenseGraph, v: number) {
    this.vertex = v
    this.graph  = graph
    this.index  = -1
    this.g      = graph.getGraph()
  }
  public begin() :number {
    this.index = -1
    return this.next()
  }
  
  public next(): number {
    for (this.index += 1; this.index < this.graph.V(); this.index++) {
      if (this.g[this.vertex][this.index]) {
        return this.index
      }
    }
    return -1
  }
  
  public end(): boolean {
    return this.index >= this.graph.V() - 1
  }
}
