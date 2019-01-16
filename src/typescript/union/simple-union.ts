export class Union {
  private ids: number[]
  private count: number
  
  constructor (n: number) {
    this.count = n
    this.ids = new Array(n)
    for (let i = 0; i < n; i++) {
      this.ids[i] = i
    }
  }
  
  public union(p: number, q: number) {
    const pId = this.find(p)
    const qId = this.find(q)
    if (pId === qId) {
      return
    }
    for (let i = 0; i < this.count; i++) {
      if(pId === this.ids[i]) {
        this.ids[i] = qId
      }
    }
  }
  
  public find(p: number): number {
    if (p < 0 || p > this.count) {
      throw new Error ('out of range')
    }
    return this.ids[p]
  }
  
  public isConnected (p: number, q: number): boolean {
    return this.ids[p] === this.ids[q]
  }
}