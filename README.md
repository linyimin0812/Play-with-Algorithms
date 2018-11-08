# algorithm-learning
算法与数据结构课堂笔记及基于typescript, golang的实现

## 目录

### 排序算法

#### 最差时间复杂度为O(n * n)的排序算法

[选择排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/selection-sort.md)

[插入排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/insertion-sort.md)

[冒泡排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/bubble-sort.md)

[希尔排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/shell-sort.md)


#### 时间复杂度为O(n * log2 n)的排序算法

归并排序
- [递归实现归并排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/merge/merge-sort-recursion.md)
- [迭代实现归并排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/merge/merge-sort-iteration.md)

快速排序
- [递归实现简单快速排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/quick-sort.md)

堆排序
- [堆排序](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/heap-sort.md)

排序算法总结
- [排序算法总结](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/sort/sort-summary.md)


### 堆

#### 最大堆  
- [最大堆的简单实现](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/heap/max-heap.md)

#### 索引堆
- [索引堆的实现](https://github.com/linyimin-bupt/algorithm-learning/blob/master/docs/typescript/heap/index-max-heap.md)

#### 和堆相关的问题

1. 在N个元素中选出前M个元素(时间复杂度： N * logM)
2. 多路归并排序(归并的过程中使用堆来实现)
3. d叉堆
4. 最大最小队列(既能找到最大的元素又能找到最小的元素)

思想： 同时维护一个最大堆和一个最小堆