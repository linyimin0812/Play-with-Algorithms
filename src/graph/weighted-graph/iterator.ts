import { Edge } from './edge'

export interface AdjIterator {
  /**
   * 返回节点V的第一条边
   * @param v 
   */
  begin(v: number): Edge | null
  /**
   * 返回下一条边
   */
  next(): Edge | null
  
  /**
   * 是否迭代完成
   */
  end(): boolean
}