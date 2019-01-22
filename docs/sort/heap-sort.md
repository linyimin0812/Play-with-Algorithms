### 堆排序

**核心思想**

最大堆每一次元素出队都是优先级最高的元素(最大的元素)


**实现思路**

将待排序的数组插入一个空的最大堆中,然后遍历最大堆即可得到一个顺序的序列

**代码实现**
```typescript
export function sort(arr: number[]) {
  const n = arr.length
  const maxHeap = new MaxHeap(n)
  for (let i = 0; i < n; i++) {
    maxHeap.insert(arr[i])
  }
  for (let i = n-1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
}
```

**优化**

1. 直接在数组实现堆化操作

每次进行堆排序时,都要遍历数组,将所有的元素插入最大堆中,性能相对较低,可以直接在数组上实现堆化操作.

思想: 
完全二叉树中每个叶子节点都是一个最大堆,从第一个非叶子节点开始,使用shift down操作,直至根节点,即可完成数组的堆化操作.

最后一个非叶子节点: count / 2

**代码实现**

```typescript
export function sortOpitimizationWithHeapify(arr: number[]) {
  const n = arr.length
  const maxHeap = new MaxHeap(arr)
  for (let i = n-1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
}
```

2. 原地堆排序

根据上面的代码,我们可以发现堆排序需要额外的内存空间,可以考虑在原地完成堆排序操作.

**实现步骤**

1. 满足最大堆性质的数组中,第一个元素是最大的元素,与最后一个元素交换位置
2. 对前n-1个元素进行shift down操作
3. 重复步骤1,2,直至最后一个元素,及完成堆排序操作

**注意事项**

由于是在原数组上完成堆排序,所以索引0对应的元素也为有效元素,这个与之前的堆排序存在区别.

以索引0为存储起始位置的完全二叉树具有一下的性质:
```
parent(i) = (i - 1) / 2
left  child (i) = i * 2 + 1
right child (i) = i * 2 + 2
```

最后一个非叶子节点: (count - 1) / 2

**代码实现**

```typescript
function heapSort(arr: number[]) {
  const n = arr.length
  // 数组堆化
  for (let i = Math.floor((n - 1) / 2); i >= 0; i++) {
    shiftDown(i)
  }
  // 堆排序
  for (let i = n - 1; i > 0; i++) {
    swap(arr, 0, i)
    shiftDown(arr, i, 0)
  }
}

function shiftDwon(arr: number[], index: number) {
  const n = arr.length
  while (index * 2 + 1 < n) {
    let j = index * 2 + 1
    if (j + 1 <= n && arr[j] < arr[j+1]) {
      j += 1
    }
    if (arr[index] < arr[j]) {
      swap(arr, index, j)
      index = j
    } else {
      break
    }
  }
}
```
**性能比较**

- 堆排序的性能

![堆排序的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmj9boko0002j5khc2lsgp6z.png)
