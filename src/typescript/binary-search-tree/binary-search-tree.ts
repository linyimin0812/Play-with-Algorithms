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
  
}