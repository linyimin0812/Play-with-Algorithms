### 核心思想

自底向上的归并排序: 将递归转换成迭代实现.


**实现思路**

与归并法相反,迭代法是自底向上完成归并操作,首先完成个数为1的两个相邻序列的归并操作,然后进行个数为2的相邻序列的归并操作,个数为4的序列归并操作,个数为8的序列归并,......,直至个数为n/2的序列归并操作,最后完成排序.

![自底向上的归并操作](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlz8jn1r00012lkhcc30gs51.png)

**归并过程**

两个有序数组合并成一个有序数组的过程

![归并过程](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjluzuf060001azkhltwdwanw.png)

**代码实现**

```typescript

// 自底向上完成归并排序
public static mergeSort (arr: number[]) {
  // 从1开始归并,然后2,4,8,16,......
  for (let i = 1; i < arr.length; i += i) {
    // 两个序列arr[j...j+i-1]和arr[j+i, j+ i + i -1]进行归并
    for (let j = 0; j + i < arr.length; j += i + i) {
      __merge(arr, j, j + i - 1, __min(j + i + i - 1, arr.length - 1))
    }
  }
}

// 对两个有序序列进行归并

private static __merge(arr: number[], l: number, mid: number, r: number) {
  // 辅助数组
  const aux: number[] = new Array(r - l + 1)
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  let i = l
  ket j = mid + 1
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

/**
 * return the minimum value between x and y
 */
private __min (x: number, y: number): number {
  return x > y ? y : x
}

```

```typescript
for (let j = 0; j + i < arr.length; j += i + i) {
  __merge(arr, j, j + i - 1, __min(j + i + i - 1, arr.length - 1))
}
```
在这一步条件的判断技巧:

j + i < arr.length: 如果 j + i > arr.length说明只存在一个有序序列,所以不需要在进行归并

__min(j + i + i - 1, arr.length - 1): 保证右边序列不越界


**性能**

![自底向上的归并排序性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlzac7c500022lkhzgdf61fr.png)

**特点**

1. 以空间换取时间,空间复杂度为O(N) 
2. 时间复杂度为O(N * lnN)
3. 归并排序的过程中没有使用索引获取数组的值,可以使用在链表排序中

**维护变量在算法运行过程中永远满足定义,是准确实现算法功能的重要保证**

**注意程序运行中的边界问题,在开发时可以按照一般情况进行编写,编写完之后再考虑边界问题,确定好边界后添加相关条件**
