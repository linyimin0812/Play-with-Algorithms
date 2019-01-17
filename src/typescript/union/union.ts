export class Union {
  private parent: number[]
  private count: number
  constructor (n: number) {
    this.count = n
    this.parent = new Array<number>(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
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
  
  public findOptimitionWithNumberOfNode (p: number): number {
    return 0
  }
  
  public findOptiomitionWithHeightOfSubtree (p: number): number {
    return 0
  }
  
  public findOptinitionWithPathCompression (p: number): number {
    return 0
  }
  
  public findOptitionWithRecursive (p: number): number {
    return 0
  }
  public isConnected (p: number, q: number): boolean {
    const pRoot = this.find (p)
    const qRoot = this.find (q)
    return pRoot === qRoot
  }
}