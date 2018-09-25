## 堆

### 优先队列
出队顺序和入队顺序无关,而与元素的优先级相关

#### 优先队列主要操作
- 入队
- 出队

#### 优先队列的实现

||入队|出队|
|:---:|:---:|:---:|
|普通数组|O(1)|O(n)|
|顺序数组|O(n)|O(1)|
|堆|O($log_2n$)|O($log_2n$)|

**对于总共N个请求**

使用普通数组或者顺序数组,最差的情况是: O($n^2$)

使用堆实现的时间复杂度为O($nlog_2n$)

### 二叉堆

**相关概念**

**二叉堆**是一棵完全二叉树(树的叶子节点全部集中在左侧)

**最大堆**: 最大堆是一棵完全二叉树, 堆中的某个节点值总是不大于其父节点的值.

#### 二叉堆的存储

1. 使用数组存储二叉堆
![使用数组存储二叉堆](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmhsn2ej0000j5khj8eqzrbt.png)

**节点索引的性质**
  - parent(i) = i / 2
  - left  child (i) = 2 * i
  - right child (i) = 2 * i + 1

**代码实现**

```typescript
export class MaxHeap {

  // 使用数组存储最大堆的元素
  private __data: Array<number>
  // 最大堆允许插入元素的个数
  private capacity: number
  // 最大堆中元素的个数
  private count: number

  constructor (capacity: number) {
    // 从索引1处开始存储最大堆的元素
    this.__data     = new Array<number>(capacity + 1)
    this.capacity   = capacity
    this.count      = 0
    this.__data[0]  = 0
  }

  get data(): number[] {
    return this.__data
  }

  // 获取最大堆中元素的个数
  public size(): number {
    return this.count
  }
  // 判断最大堆是否为空,如果为空返回true,否则返回false
  public isEmpty(): boolean {
    return this.count === 0
  }

  // 往最大堆中插入元素
  public insert(value: number) {
    if (this.count >= this.capacity) {
      throw new Error(`The array is full, can't insert element any more`)
    }
    this.__data[this.count + 1] = value
    this.count++
    this.shiftUp(this.count)
  }

  // 插入元素后保证最大堆的性质
  private shiftUp(index: number) {
    while (index > 1 && this.__data[index] > this.__data[Math.floor(index / 2)]) {
      this.swap(index, Math.floor(index / 2))
      index = Math.floor(index / 2)
    }
  }

  private swap(i: number, j: number) {
    const       temp: number = this.__data[i]
    this.__data [i]          = this.__data[j]
    this.__data [j]          = temp
  }

}
```

2. 待补充


