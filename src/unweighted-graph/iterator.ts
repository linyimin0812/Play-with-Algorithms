export interface AdjIterator {
  /**
   * 返回指定节点的第一个连接节点
   */
  begin(): number 
  /**
   * 返回节点的下一个连接节点
   */
  next(): number
  /**
   * 判断是否已经迭代完成
   */
  end(): boolean
}