### 核心思想

将数组分成两个部分:

- 已排序部分
- 未排序部分

![示意图](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlnuz6z40001wzkhosss0q2i.png)

**实现思路**

在未排序部分中寻找最小元素的索引,然后将最小元素与未排序部分的第一个元素交换位置,此时最小元素成为当前有序部分中最大的元素,以此类推,直至未排序部分为空,排序完成.

**代码实现**

```go
func SelectionSort(arr []int) {
  for i := 0; i < cap(arr); i++ {
    // 寻找未排序部分中区间[i, n)z中的最小值
    minIndex := i
    for j := i + 1; j < n; j++ {
      if arr[j] < arr[minIndex] {
        minIndex = j
      }
    }
    // 未排序部分的最小值与未排序部分第一个元素交换位置
    temp := arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}
```

**特点**

对于任意一个数组,两层循环中每层循环都必须完成,时间复杂度(O(N * N))

**性能**

![对10000个随机序列进行排序所需的时间](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm0nvrwh0000j7khjrk2rbc6.png)