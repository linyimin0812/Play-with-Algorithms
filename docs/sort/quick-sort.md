### 快速排序

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

**特点**

1. 对于随机的,非大量重复元素的数组,时间复杂度为O($log_2n$)
2. 对近乎有序的序列进行排序,快速排序算法会退化成O($n^2$)
3. 存在大量重复键值的序列,快速排序算法会退化成O($n^2$)

**优化**
1. 对于近乎有序的序列进行排序,默认选择第一个元素作为基准元素,生成的两个序列中某一个序列基本为空,退化成一棵极度不平衡的二叉树

![](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmeyjlbu0000rrkhkt267uiu.png)

所以,优化的方法就是:尽量使得得到的两个序列的长度相一致,所以采用随机选取基准元素的方式完成快速排序

**代码实现**
```typescript
function quickSort(arr: numberp[]) {
  __quickSort(arr, 0, arr.length - 1)
}

// 递归方法实现快速排序
function __quickSort(arr: number[], l: number, r: number) {
  if (l >= r) {
    return
  }
  const p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

// 对于基准元素的分区操作
function __partition(arr: number, l: number, r: number): number {
  // 随机选择一个基准元素
  const random = Math.floor((Math.rand() * (r - l + 1))) + l
  swap(arr, l, random)
  const v      = arr[l]
  let   i      = l
  for (let j = l + 1; j <= r; j ++) {
    if (arr[j] < v) {
      swap(arr, i + 1, j)
      i++
    }
  }
  swap(arr, l, i)
  return i
}

```

2. 存在大量重复键值的序列

选取随机元素作为基准元素,成功避免了快速排序对几乎有序序列退化成时间复杂度为O($n^2$)的算法,但是,当排序序列中存在大量的重复元素时,快速排序依然会退化成时间复杂度为O($n^2$)的算法

**优化方法**: 使用二路快速排序,其思想就是尽可能使分区得到的两个序列长度相一致

![二路快速排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmf0nh6p0002rrkh0ncvuirx.png)


**代码实现**

```typescript
// 使用两路快速排序
function partition(arr: number[], l: number, r: number): number {
  const random = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, l, random)
  const v = arr[l]
  let i = l + 1
  let j = r
  while (true) {
    while (arr[i] <= v) {
      i++
    }
    while (arr[j] >= v) {
      j--
    }
    if (i > j){
      break
    }
    swap(arr, i, j)
  }
  swap(arr, l, j)
  return j
}
```

3. 三路快速排序

三路排序的核心思想是: 在分区时,小于基准元素的归为一部分,等于基准元素的归为一部分及大于基准元素的归为另外一部分,下次只对小于基准元素和大于基准元素的部分进行递归快速排序,在存在大量重复元素的待排序列中,三路快速排序的效率要高于双路快速排序.

![未完成分区](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmg0vz9i00025hkh4vbqwkcf.png)

![已完成分区](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmg0xec900035hkhv76gujrh.png)


**代码实现**

```typescript
function __partition(arr: number[], l: number, r: number): {lt: number, gt: number} {
    // Select a random element as base element
    const random = Math.floor(Math.random() * (r - l + 1)) + l
    QuickSort3Way.__swap(arr, l, random)
    const v  = arr[l]
    let   i  = l + 1
    let   lt = l
    let   gt = r + 1
    while (i < gt) {
      if (arr[i] < v) {
        this.__swap(arr, i, lt+1)
        i++
        lt++
      } else if (arr[i] > v) {
        this.__swap(arr, i, gt - 1)
        gt--
      } else {
        i++
      }
    }
    this.__swap(arr, l, lt)
    return {lt, gt}
  }

```

**性能**

- 递归实现简单快速排序性能

![递归实现简单快速排序性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjm527veh000188kh5himw1oh.png)

当对近乎有序的大量元素序列使用简单的快速排序时,可能会出现栈溢出问题

![栈溢出](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmfqkh0w0008rrkhjdw0q52o.png)

- 选取随机元素作为基准元素快速排序的性能

![选取随机元素作为基准元素快速排序的性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmf0aack0001rrkhbdsa0po3.png)

- 双路快速排序性能

![双路快速排序性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmfnxirh0003rrkhvfzwl3ge.png)

- 三路快速排序性能

![三路快速排序性能](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjmg2twho00045hkhl7vp4kz2.png)
