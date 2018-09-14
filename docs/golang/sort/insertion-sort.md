### 插入排序

**核心思想**

将数组分成两个部分:
- 已排序部分
- 未排序部分

![插入排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlos4ym70000awkhitlrev69.png)

**实现思路**

从未排序序列中选出第一个元素,与有序部分的最后一个元素比较,如果较小,两个元素交换位置,交换位置之后的未排序部分的元素继续和前一个有序部分的元素进行比较,如果较大,退出当前循环,完成当前元素的排序,否则继续与前一个元素进行比较,交换位置,直至到第一个元素,完成当前元素的访问,以此类推,完成所有元素的访问.

**代码实现**

```go
func Sort (arr []int) {
  for i := 1; i < cap(arr); i++ {
    for j = i; j > 0; j++ {
      if arr[j - 1] > arr[j] {
        arr[j - 1], arr[j] = arr[j], arr[j - 1]
      } else {
        break
      }
    }
  }
}
```

**优化**

由上述代码可以发现: 在未排序序列存在大量乱序元素的情况下,会存在大量的交换操作,而交换操作的花销要大于比较的花销,所以此种方式实现的插入排序的性能可能要比选择排序的性能差.所以可以通过减少交换次数以实现排序性能的提升.

**优化代码实现**

```go
func SortOptimization (arr []int) {
  for i := 1; i < cap(arr); i++ {
    j := i
    currentValue := arr[i]
    for j := i; j > 0; j-- {
      if (currentValue < arr[j - 1]) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }
    arr[j] = currentValue
  }
}
```

**性能**

- 插入排序在随机数组和近似有序数组中的性能比较
![随机数组与近似有序的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm1cpbjd0002j7khjxo500rz.png)


- 未优化和优化之后的插入排序的性能比较
![未优化和优化后的性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm1cpyql0003j7khbxfenw9y.png)

**特点**

- 第二层循环可以提前终止,理论上比选择排序要高,但是交换操作的代价比比较要高,所以实际上选择排序的性能要比插入排序高
- 在数组近乎顺序的时候,插入排序的性能很高,如果是顺序数组,插入排序的性能会到达O(N)
