import { Edge } from '../edge'

export class DenseGraph {
  private _v        : number             // 图对应的定点数
  private _e        : number             // 图对应的边数
  private _g        : (Edge | null)[][]
  private isDirected: boolean            // 是否是有向图
  
  constructor(v: number, isDirected: boolean) {
    this._v         = v
    this._e         = 0
    this._g         = new Array<Array<Edge | null>>(v)
    this.isDirected = isDirected
    
    for (let i = 0; i < v; i++) {
      this._g[i] = new Array<Edge | null>(v).fill(null)
    }
    
  }
  get v(): number {
    return this._v
  }
  
  get e(): number {
    return this._e
  }
  
  get g(): (Edge | null)[][] {
    return this._g
  }
  
  public addEdge(from: number, to: number, weight: number) {
    const edge: Edge = new Edge(from, to, weight)
    // If edge existed, then overwrite it directly
    if (this._g[from][to]) {
      this._e--
    }
    this._g[from][to] = edge
    // Directed graph
    if (!this.isDirected) {
      this._g[to][from] = edge
    }
    this._e ++    
  }
  
  public hasEdge(from: number, to: number): boolean {
    return this._g[from][to] != null 
  }
}
