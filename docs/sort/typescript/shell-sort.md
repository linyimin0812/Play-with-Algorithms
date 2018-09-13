### 希尔排序

**核心思想**

希尔排序也是插入排序的一种形式,使用越是近似有序的数组,插入排序的性能越好的特性实现的一种优化.
希尔排序是把记录按下标的一定增量进行分组,对每组使用插入排序算法完成排序;随着增量的逐渐减少,当增量为1时,希尔排序变成标准的插入排序,完成排序.

![希尔排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjls4kafg0000ickhkl4198mm.png)

实现思路:
1. 计算递增序列
2. 按照递增序列分组使用插入排序进行排序
3. 循环以上步骤直至递增量为1,完成排序

代码实现
```typescript
function shellSort (arr: numberp[]) {
  // 计算增量序列
  let h = 1
  while (h < arr.lenght / 3) {
    h = 3 * h + 1
  }

  // 按照增量进行分组并使用插入排序算法进行排序
  while (h >= 1) {
    for (let i = h; i < arr.length; i ++) {
      let j = i
      const currentValue: number = arr[i]

      for (j = i; j >= h; j -= h) {
        if (currentValue < arr[j - h]) {
          arr[j] = arr[j - h]
        }
      }
      arr[j] = currentValue
    }
    h /= 3
  }
}
```

性能比较:

- 希尔排序和优化之后的插入排序的性能比较

![希尔排序与插入排序性能比较](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlsraq780000etkhzhhr9y67.png)
