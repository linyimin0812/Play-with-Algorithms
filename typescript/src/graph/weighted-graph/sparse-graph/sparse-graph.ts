import { Edge } from '../edge';

export class SparseGraph {
  private _v: number
  private _e: number
  private _g: Edge[][]
  private isDirected: boolean
  
  constructor(v: number, isDirected: boolean) {
    this._v         = v
    this._e         = 0
    this._g         = new Array<Array<Edge>>(v)
    this.isDirected = isDirected
    for (let i = 0; i < this._v; i++) {
      this._g[i] = new Array<Edge>()
    }
  }
  
  get v(): number {
    return this._v
  }
  
  get e(): number {
    return this._e
  }
  
  get g(): Edge[][] {
    return this._g 
  }
  
  public addEdge(v: number, w: number, weight: number) {
    const edge = new Edge(v, w, weight)
    /**
     * 存在平行边的问题,现在暂且不考虑
     */
    this._g[v].push(edge)
    
    if (! this.isDirected) {
      this._g[w].push(edge)
    }
    this._e++
  }
  
  public hasEdge(v: number, w: number): boolean {
    for (let i = 0; i < this._g[v].length; i++) {
      if (this._g[v][i].another(v) === w) {
        return true
      }
    }
    return false
  }
}