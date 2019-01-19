export class Union {
  private parent: number[]
  // 使用秩进行优化
  private rank: number[]
  private count: number
  constructor (n: number) {
    this.count = n
    this.parent = new Array<number>(n)
    this.rank   = new Array<number>(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
      // 默认单节点对应的秩为1
      this.rank[i] = 1
    }
  }
  
  public union (p: number, q: number) {
    const pRoot = this.find(p)
    const qRoot = this.find(q)
    if (pRoot === qRoot) {
      return
    }
    this.parent[pRoot] = qRoot
  }
  
  public find (p: number): number {
    if (p < 0 || p > this.count) {
      throw new Error ('out of range')
    }
    while (p !== this.parent[p]) {
      p = this.parent[p]
    }
    
    return p
  }
  
  public insertOptimizationWithHeightOfSubtree (p: number, q: number) {
    const pRoot= this.find(p)
    const qRoot= this.find(q)
    if (pRoot === qRoot) {
      return
    }
    if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[pRoot] = qRoot 
      return
    }
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[qRoot] = pRoot
      return
    }
    if (this.rank[pRoot] === this.rank[qRoot]) {
      this.parent[qRoot] = pRoot
      this.rank[qRoot] = this.rank[qRoot]++
      return
    }
  }
  
  public insertOptimizationWithPathCompression (p: number): number {
    return 0
  }
  
  public findOptimizationWithRecursive (p: number): number {
    return 0
  }
  public isConnected (p: number, q: number): boolean {
    const pRoot = this.find (p)
    const qRoot = this.find (q)
    return pRoot === qRoot
  }
}