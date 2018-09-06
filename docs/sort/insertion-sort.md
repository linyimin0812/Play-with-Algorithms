### 插入排序

核心思想:

将数组分成两个部分
- 已排序部分
- 未排序部分

![插入排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlos4ym70000awkhitlrev69.png)

实现思路:
从未排序部分中选出第一个元素,与有序部分的最后一个元素比较,如果较小,两个元素交换位置,交换位置之后的未排序部分的元素继续和前一个有序部分的元素进行比较,如果较大,退出当前循环,完成当前元素的排序,否则继续与前一个比较,交换位置,直至到第一个元素,完成当前元素的访问.以此类推,完成所有元素的访问. 

代码实现
```typescript
function insertionSort (arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j++) {
      // 寻找arr[i]合适的插入位置
      if (arr[j] < arr[j - 1]) {
        let temp   = arr[j]
        arr[j]     = arr[j - 1]
        arr[j - 1] = temp
      } else {
        break
      }
    }
  }
}
```

特点:
- 第二层循环可以提前终止,理论上比选择排序要高,但是交换操作的代价比比较要高,所以实际上选择排序的性能要比插入排序高
- 在数组近乎顺序的时候,插入排序的性能很高,如果是顺序数组,插入排序的性能会到达O(N)


优化:

通过减少交换次数,实现性能的提升.将当前需要插入的元素复制,与前一个有序的元素进行比较,如果前一个元素大于当前元素,则向后移一位,然后继续与下一位有序元素进行比较,如果当前元素大于有序元素,则将当前元素赋值给当前的位置.完成排序.

代码实现:

```typescript
function insertionSortOptimization (arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = 0
    let currentValue = arr[i]
    // 寻找arr[i]合适的插入位置
    for (j = i; j > 0; j--) {
      if (currentValue < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }
    arr[j] = currentVlaue
  }
}
```

性能比较:

- 大量交换操作和优化之后没有交换的排序性能比较

![交换与不交换的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlqoa62n0000qjkhqspp45zr.png)

- 插入排序在随机数组和近似有序数组中的排序性能比较

![随机数组和近似有序数组](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlqpc4ky0001qjkhcbz2q2s1.png)