###核心思想
将数组分为两个部分:

- 已排序部分
- 未排序部分

![示意图](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlnuz6z40001wzkhosss0q2i.png)

实现思路:

在未排序部分中寻找最小元素的索引,然后将最小元素与未排序部分的第一个元素交换位置,此时最小元素成为当前有序部分中最大的元素,以此类推,直至未排序部分为空,排序完成.

代码实现:
```typescript
function selectionSort (arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    // 寻找未排序部分最小值,即区间[i, n)中的最小值
    let minIndex: number = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 未排序部分的最小值与第一个元素交换位置
    const temp    = arr[i]
    arr[i]        = arr[minIndex]
    arr[minIndex] = temp
  }
}
```