/**
 * 稀疏图的邻接表实现
 * 会存在平行边的问题
 */
export class SparseGraph {
  private v: number
  private e: number
  
  private g: number[][]
  private isDirected: boolean
  
  constructor (v: number, isDirected: boolean) {
    this.v          = v
    this.isDirected = isDirected
    this.e          = 0
    this.g = new Array<Array<number>>(v)
    for (let i = 0; i < this.v; i++) {
      this.g[i] = new Array<number>()
    }
  }
  
  /**
   * 返回图节点的个数
   */
  public V(): number {
    return this.v
  }
  
  /**
   * 返回图的边数
   */
  public E(): number {
    return this.e
  }
  
  /**
   * 在图中添加一条边
   * @param v 
   * @param w 
   */
  public addEdge (v: number, w: number) {
    if (v > this.g.length || w > this.g.length) {
      throw new Error('out of range')
    }
    // 避免平行边,这个操作的最差时间复杂度为O(n) 
    if (this.g[v].includes(w)) {
      return
    }
    this.e++
    this.g[v].push(w)
    // v !== w 避免自环边  
    if (v !== w && ! this.isDirected) {
      this.g[w].push(v)
    }
  }
  
  /**
   * 判断两个节点是否相连
   * @param v 
   * @param w 
   */
  public hasEdge (v: number, w: number): boolean {
    
    return this.g[v].includes(w)
  }
  
  /**
   * 打印整张图
   */
  public show() {
    for (let i = 0; i < this.v; i++) {
      for (let j = 0; j < this.g[i].length; j++) {
        console.log(this.g[i][j])
      }
    }
  }
}
