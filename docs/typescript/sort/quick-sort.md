### 希尔排序

**核心思想**

快速排序和归并排序类似,都采用思想都是分治法:
1. 从序列中取出一个数作为基准数
2. 对序列进行分区(partition),找出基准数的最终排序位置,并将比基准数小的数,移至基准数的左边,大于基准数的元素移至基准数的右边
3. 继续对基准数左边的序列和基准数右边的序列重复1,2步,直至每个区间只有一个元素,完成排序操作

![快速排序的分区操作](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm3nefgp0000jikh9zkkom50.png)

**实现思路**

1. 选取子序列区间的第一个元素作为基准元素
2. 对子序列进行分区操作,将比基准数下的数移至基准数的左边,将比基准数大的元素移至基准数的右边
3. 重复以上步骤,直至子区间元素的个数为1,完成排序

**代码实现**

```typescript
function quickSort(arr: number[]) {
  __quickSort(arr, l, r)
}

// 递归实现快速排序
function __quickSort(arr: number[], l: number, r: number) {
  if (l >= r) {
    return
  }
  // 分区操作
  const p = partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

function partition(arr: numbner[], l: number, r: number): number {
  // 选取第一个元素作为基准数
  const v = arr[l]
  let i = l
  for (let j = l + 1; i <= r; i++) {
    if (arr[j] < v) {
      swap(arr, i+1, j)
      i++
    }
  }
  swap(arr, l, i)
  // 返回基准元素在最终有序序列中的索引
  return i
}

```

**性能**

- 递归实现简单快速排序性能

![递归实现简单快速排序性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm527veh000188kh5himw1oh.png)
