## 背景

查找问题是计算机中非常重要的基础问题

## 二分查找法(Binary search)

对于有序数列，才能使用二分查找法(排序的作用)

[二分查找法](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjoeekbg30000wqkhbhqge38z.png)

查找步骤：

1. 数组中间元素与目标元素V比较，如果两个元素相等，则直接返回，否则进行第二步：
2. 数组分为大于V和小于V的两部分， 如果中间元素大于目标元素V，则在大于V的部分重复第一步，否则在小于V的部分重复第一步。直至找目标元素。

```tyepscript

class BinarySearch {
  static binarySearch (arr: number[], target； number) {
    
  }
}
```