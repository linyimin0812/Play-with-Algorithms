### 排序算法的总结

||平均时间复杂度|原地排序|额外空间|稳定排序|
|:---:|:---:|:---:|:---:|:---:|
|选择排序<br />Selection Sort|O(n<sup>2</sup>)|&radic;|O(1)|&times;|
|冒泡排序<br />Bubble Sort|O(n<sup>2</sup>)|&radic;|O(1)|&radic;|
|插入排序<br />Insertion Sort|O(n<sup>2</sup>)|&radic;|O(1)|&radic;|
|希尔排序<br />Shell Sort|与增量相关|&radic;|O(1)|&times;|
|归并排序<br />Merge Sort|O(nlog<sub>2</sub>n)|&times;|O(n)|&radic;|
|快速排序<br />Quick Sort|O(nlog<sub>2</sub>n)|&radic;|O(log<sub>2</sub>n)|&times;|
|堆排序<br />Heap Sort|O(nlog<sub>2</sub>n)|&radic;|O(1)|&times;|

#### 相关概念

**排序算法的稳定性**

对于相等的元素,在排序后,原来靠前的元素依旧靠前.(相等元素的相对位置没有发生改变)

