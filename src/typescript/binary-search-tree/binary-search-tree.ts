import { notDeepStrictEqual } from "assert";

interface Node {
  key  : string,
  value: string,
  left : Node | null,
  right: Node | null,
}

export class BST {
  private root: Node | null
  private count: number
  
  constructor() {
    this.root  = null
    this.count = 0
  }
  public size(): number {
    return this.count
  }
  public isEmpty(): boolean {
    return this.root === null
  }
  
  public insert(key: string, value: string) {
    const node: Node = {
      key: key,
      value: value,
      left: null,
      right: null,
    } 
    this.root = this.__insert(this.root, node)
  }
  
  /**
   * 返回插入节点二叉树的根节点
   * @param root 
   * @param node 
   */
  private __insert(root: Node | null, node: Node): Node {
    if (root === null) {
      this.count++
      return node
    }
    if (node.key === root.key) {
      root.value = node.value
    }
    if (node.key < root.key) {
      root.left = this.__insert(root.left, node)    
    }
    if (node.key > root.key) {
      root.right = this.__insert(root.right, node)
    }
    return root
  }
  
  public insertNoRecusive(key: string, value: string) {
    const node: Node = {
      key: key,
      value: value,
      left: null,
      right: null,
    } 
    if (this.root === null) {
      this.root = node
      this.count++
      return
    }
    let p = this.root
    while (p !== null) {
      if (p.key === node.key) {
        p.value = node.value
        return
      }
      if (p.key > node.key) {
        if (p.left !== null) {
          p = p.left
          continue
        }
        break
      }
      if (p.key < node.key) {
        if (p.right !== null) {
          p = p.right
          continue
        }
        break
      }
    }
    if (p.key > node.key) {
      p.left = node
    } else {
      p.right = node
    }
    this.count++
  }
  
  public has(key: string): boolean {
    return this.__has(this.root, key)
  }
  
  private __has(node: Node | null, key: string): boolean {
    if (node === null) {
      return false
    }
    if (node.key === key) {
      return false
    }
    if (node.key > key) {
      return this.__has(node.left, key)
    }
    return this.__has(node.right, key)
  }
  
  public search(key: string): string | null {
    return this.__search(this.root, key)
  }
  
  private __search(node: Node | null, key: string): string | null {
    if (node === null) {
      return null
    }
    if (node.key === key) {
      return node.value
    }
    if (node.key > key) {
      return this.__search(node.left, key)
    }
    return this.__search(node.right, key)
  }
  
  
  public preOrder() {
    this.__preOrder(this.root)
  }
  
  private __preOrder(node: Node | null) {
    if (node !== null) {
      console.log(node.value)
      this.__preOrder(node.left)
      this.__preOrder(node.right)
    }
  }
  
  public inOrder() {
    this.__inOrder(this.root)
  }
  
  private __inOrder(node: Node | null) {
    if (node !== null) {
      this.__inOrder(node.left)
      console.log(node.value)
      this.__inOrder(node.right)
    }
  }
  
  public postOrder() {
    this.__postOrder(this.root)
  }
  
  private __postOrder(node: Node | null) {
    if (node !== null) {
      this.__postOrder(node.left)
      this.__postOrder(node.right)
      console.log(node.value)
    }
  }
  
  public levelOrder() {
    const queue = new Array<Node>()
    if (this.root === null) {
      return
    } 
    queue.push(this.root)
    while(queue.length > 0) {
      const node = queue.shift() as Node
      console.log(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  
  public  minValue(): string {
    const minNode = this.min(this.root)
    return minNode.value
  }
  private min(node: Node | null): Node {
    if (node === null) {
      throw new Error('BST is empty')
    }
    while (node.left) {
      node = node.left
    }
    return node
  }
  
  public maxValue(): string {
    const maxNode = this.max(this.root)
    return maxNode.value
  }
  private max(node: Node | null) :Node {
    if (node === null) {
      throw new Error('BST is empty')
    }
    while(node.right) {
      node = node.right
    }
    return node
  }
  
  public removeMin() {
    this.root = this.__removeMin(this.root)
  }
  /**
   * 删除以node为根的二分搜索树中键值最小的节点
   * 返回删除节点后新的二分搜索树的根
   * @param node 
   */
  private __removeMin(node: Node | null): Node | null {
    if (!node) {
      return null
    }
    if (node.left === null) {
      const rightNode = node.right
      this.count --
      return rightNode
    }
    node.left = this.__removeMin(node.left) as Node
    return node
  }
  
  public removeMax() {
    this.root = this.__removeMax(this.root)
  }
  
  /**
   * 删除以node为根的二叉树中键值最大的节点
   * 返回删除节点后新的二叉树搜索树的根
   * @param node 
   */
  private __removeMax(node: Node | null): Node | null {
    if (node === null) {
      return node
    }
    if (node.right === null) {
      const leftNode = node.left
      this.count--
      return leftNode
    } 
    node.right = this.__removeMax(node.right) as Node
    return node
  }
  
  /**
   * 删除键值为key的节点
   * 返回删除键值为key的节点后新的二叉树的根节点
   * @param key 
   */
  public remove(key: string) {
    this.root = this.__remove(this.root, key)
  }
  
  private __remove(node: Node | null, key: string): Node | null {
    if (node === null) {
      return null
    }
    if (node.key > key) {
      node.left = this.__remove(node.left, key)
      return node
    }
    if (node.key < key) {
      node.right = this.__remove(node.right, key)
      return node
    }
    
    if (node.key === key) {
      // 只有左孩子
      if (node.right === null) {
         this.count--
         return node.left
      }
      // 只有右孩子
      if (node.left === null) {
        this.count--
        return node.right
      }
      // 左右孩子都存在
      const successor = this.min(node.right)
      successor.left = node.left
      successor.right = this.__removeMin(node.right)
      this.count--
      return successor
    }
    return null
  }
  
  /**
   * 前驱节点
   * @param node 
   */
  public predecessor(node: Node): Node | null {
    let predecessor: Node | null = null
    if (node.left !== null) {
      predecessor = this.max(node.left)
    }
    return predecessor
  }
  
  /**
   * 后继节点
   * @param node 
   */
  public succesor(node: Node): Node | null {
    let successor: Node | null = null
    if (node.right !== null) {
      successor = this.max(node.right)
    }
    return successor
  }
  
}