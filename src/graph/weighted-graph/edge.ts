export class Edge {
  private _from  : number
  private _to    : number
  private _weight: number
  
  constructor(from: number, to: number, weight: number) {
    this._from   = from
    this._to     = to
    this._weight = weight
  }
  
  get from(): number {
    return this._from
  }
  
  get to(): number {
    return this._to
  }
  
  get weight(): number {
    return this._weight
  }
  
  public another(v: number): number {
    return this._from === v ? this._to : this._from
  }
}
