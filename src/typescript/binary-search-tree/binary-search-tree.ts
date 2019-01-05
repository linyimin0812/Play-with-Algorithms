interface Node {
  key  : string,
  value: string,
  left : Node,
  right: Node,
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
  
  public insert(node: Node) {
    this.root = this.__insert(this.root, node)
  }
  
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
  
  public insertNoRecusive(node: Node) {
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
}