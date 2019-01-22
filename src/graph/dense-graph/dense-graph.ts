/**
 * 稠密图的实现
 */

export class DenseGraph {
  private v: number             // 节点个数
  private e: number             // 边数
  private g: boolean[][]        // 邻接矩阵表示图
  private isDirected: boolean   // 是否为有向图
  
  constructor (n: number, isDirected: boolean) {
    this.v          = n
    this.e          = 0
    this.isDirected = isDirected
    this.g          = new Array<Array<boolean>>(n)
    
    for (let i = 0; i < n; i++) {
      this.g[i] = new Array<boolean>(n).fill(false)
    }
  }
  
  // 返回图节点的个数
  public V(): number {
    return this.v
  }
  
  // 返回边个数
  public E(): number {
    return this.e
  }
  
  // 添加一条边
  public addEdge (v: number, w: number) {
    if (this.g[v][w]) {
      return
    }
    if (this.isDirected) {
      this.g[v][w] = true
    } else {
      this.g[v][w] = this.g[w][v] = true
    }
    this.e ++
  }
  
  // 判断两个节点间是否相连
  public hasEdge (v: number, w: number): boolean {
    return this.g[v][w]
  }
  
  // 打印整张图
  public show() {
    for (let i = 0; i < this.v; i++) {
      for (let j = 0; j < this.v; j++) {
        console.log(`${i}: ${this.g[i][j]}`)
      }
    }
  }
}
