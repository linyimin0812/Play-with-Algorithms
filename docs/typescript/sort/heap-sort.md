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

每次进行堆排序时,都要遍历数组,将所有的元素插入最大堆中,性能相对较低,可以直接在数组上实现堆化操作.

思想: 
完全二叉树中每个叶子节点都是一个最大堆,从第一个非叶子节点开始,使用shift down操作,直至根节点,即可完成数组的堆化操作.

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

**性能比较**

- 堆排序的性能

![堆排序的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmiqk34y0001j5kh2dv2a7ug.png)
