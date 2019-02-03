import { AdjIterator } from '../iterator'
import { SparseGraph } from './sparse-graph'

export class SparseGraphIterator implements AdjIterator {
  private g     : number[][]
  private index : number
  private vertex: number
  
  constructor (graph: SparseGraph, vertex: number) {
    this.g      = graph.getGraph()
    this.index  = -1
    this.vertex = vertex
  }
  public  begin(): number {
    this.index = -1
    return this.next()
  }
  
  public next(): number {
    this.index++
    if (this.g[this.vertex].length > this.index)
      return this.g[this.vertex][this.index]
    return -1
  }
  
  public end(): boolean {
    return this.g[this.vertex].length - 1 <= this.index
  }
}