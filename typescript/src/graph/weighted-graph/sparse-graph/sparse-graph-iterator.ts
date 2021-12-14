import { Edge         } from '../edge'
import { AdjIterator  } from '../iterator'
import { SparseGraph  } from './sparse-graph'

export class SparseGraphIterator implements AdjIterator {
  private v    : number
  private graph: SparseGraph
  private index: number
  constructor(graph: SparseGraph, v: number) {
    this.v     = v
    this.graph = graph
    this.index = -1
  }
  
  public begin(): Edge | null {
     this.index = -1
     return this.next()
  }
  
  public next(): Edge | null {
    this.index++
    return this.graph.g[this.v][this.index] || null
  }
  
  public end(): boolean {
    return this.graph.g[this.v].length <= this.index
  }
}