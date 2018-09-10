### 核心思想

[分治法](https://zh.wikipedia.org/wiki/%E5%88%86%E6%B2%BB%E6%B3%95)


**实现思路**

将数组分成二组A，B，如果组内的数据都是有序的，使用归并算法将A,B两个数组合并成一个有序的数组.通过将A，B组各自再分成二组。依次类推，当分出来的小组只有一个数据时，则每个小组组内元素为有序，然后依次合并相邻的二个小组直至合并成一个数组,最终完成排序.

**归并过程**

两个有序数组合并成一个有序数组的过程

![归并过程](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjluzuf060001azkhltwdwanw.png)

**代码实现**

```typescript
public static mergeSort (arr: number[]) {
  __mergeSort(arr, 0, arr.length - 1 )
}
// 递归使用归并排序,对arr[l, r]的范围内进行排序
private static __mergeSort (arr: number[], l: number, r: number) {
  if (l >= r) {
    return
  }
  // Important: We need to make sure mid is a integer, or the sort algorithm will be very slow
  const mid: number = Math.floor((l + r) / 2)
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  __merge(arr, l, mid, r)
}

// 将arr[l,mid]和arr[mid + 1, r]两部分进行归并
private static __merge(arr: number[], l: number, mid: number, r: number) {
  // 临时空间
  const aux: number[] = new Array(r - l + 1)
  for (let i = l; i <= r; i++) {
    aux[l - i] = arr[i]
  }

  // 合并两个已经排好序的数组
  let i = l
  let j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}
```

1. 对归并过程的优化

在合并两个有序序列的过程中,先判断两个有序中arr[mid]和arr[mid + 1]的大小,如果arr[mid]小于arr[mid+1],则不需要进行归并,否则在进行归并操作.

**优化代码实现**
``` typescript
public static mergeSort (arr: number[]) {
  __mergeSort(arr, 0, arr.length - 1)
}

private static __mergeSort(arr: number[], l: number, r: number) {
  if (l >= r) {
    return
  }

  const mid: number = Math.floor((l + r) / 2)
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  // 进行优化, 如果有序,则不必在归并
  if (arr[mid] > arr[mid + 1])
    merge(arr, l, mid, r)
}

private static merge(arr: number, l: number, mid: number, r: number) {
  // 辅助数组
  const aux: number[] = new Array(r - l + 1)
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  let i: number = l
  let j: number = mid + 1

  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] > aux[j - 1]) {
      arr[k] = aux[j - 1]
      j ++
    } else {
      arr[k] = aux[i - l]
      i++
    }
  }
} 
```

**优化代码**
2. 对递归过程的优化

**优化代码实现**


**性能比较**

- 优化之后的插入排序和归并排序性能比较
![优化之后的插入排序和归并排序性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlv2hzid0003azkh8tjrat5q.png)

- 归并排序与优化之后的插入排序进行比较
对有序数组进行排序,优化之后的插入排序的性能要远远高于归并排序
![希尔排序与优化之后的插入排序进行比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlvnqzce0005azkh6vhl0gma.png)

- 对归并过程进行优化之后归并排序和插入排序的性能比较

可以返现对有序序列的排序,优化之后的归并排序性能要优于普通的归并排序,但是还是比插入排序弱.
![对归并过程进行优化之后归并排序和插入排序的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlvoqgpi0006azkh0a22urpk.png)


**特点**

1. 以空间换取时间,空间复杂度为O(N) 
2. 时间复杂度为O(N * lnN)

**维护变量在算法运行过程中永远满足定义,是准确实现算法功能的重要保证**