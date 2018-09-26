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

最核心的操作:

shiftup和shiftdown

- shift up

插入新的元素时,在数组的末尾插入元素,然后逐一向上调整,使得整个数组满足最大堆的性质.


- shift down

取出最大元素时,将数组末尾的元素与第一个元素交换位置,然后调整第一个元素的位置,使得整个数组最后满足最大堆的性质.

步骤:

1. 判断当前元素是否存在孩子节点(左孩子节点,因为在完全二叉树中肯定不会只存在右孩子节点)
2. 将左孩子与右孩子节点中最大的元素与父节点进行比较,如果大于父节点,交换位置,否则完成shift down操作,此时数组满足最大堆的性质
3. 重复步骤1,2,直至当前元素不存在孩子节点,完成shift down操作.

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

  // 取出最大堆中的最大元素
  public extractMax(): number {
    if (this.count <= 0) {
      throw new Error('The max heap is empty')
    }

    const maxValue = data[1]
    swap(1, this.count)
    this.count--
    shiftDown(1)
    return maxValue
  }

  // 插入元素后保证最大堆的性质
  private shiftUp(index: number) {
    while (index > 1 && this.__data[index] > this.__data[Math.floor(index / 2)]) {
      this.swap(index, Math.floor(index / 2))
      index = Math.floor(index / 2)
    }
  }

  private shiftDown(index: number) {
    while(2 * index <= this.count) {
      let j = 2 * index
      if (j + 1 <= this.count && this.__data[j] < this.__data[j + 1]) {
        j += 1
      }
      if (this.__data[index] < this.__data[j]) {
        swap(index, j)
        index = j
      } else {
        break
      }
    }
  }

  private swap(i: number, j: number) {
    const       temp: number = this.__data[i]
    this.__data [i]          = this.__data[j]
    this.__data [j]          = temp
  }

}

```


