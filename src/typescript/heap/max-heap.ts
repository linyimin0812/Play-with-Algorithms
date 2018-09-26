// TODO: 不是使用交换操作,使用复制操作,参考插入排序的实现
export class MaxHeap {

  // The array stores max heap
  private __data: Array<number>
  // The capacity of array which store the max heap
  private capacity: number
  // The size of max heap
  private count: number

  constructor (capacity: number | number[]) {
    // For we store element from index 1
    if (! Array.isArray(capacity)) {
      this.__data     = new Array<number>(capacity + 1)
      this.capacity   = capacity
      this.count        = 0
    } else {

      // heapify
      this.__data     = new Array<number> (capacity.length + 1)
      this.capacity   = capacity.length
      this.count      = 0

      for (let i = 0; i < capacity.length; i++) {
        this.__data[i+1] = capacity[i]
      }

      for (let i = Math.floor(capacity.length / 2); i >= 1; i--) {
        this.shiftDown(i)
      }
    }
    this.__data[0]    = 0
  }

  get data(): number[] {
    return this.__data
  }

  // Get the number of elements in max heap
  public size(): number {
    return this.count
  }
  // If the max heap is empty return true, or return false
  public isEmpty(): boolean {
    return this.count === 0
  }

  // Insert a element into max heap
  public insert(value: number) {
    if (this.count >= this.capacity) {
      throw new Error(`The array is full, can't insert element any more`)
    }
    this.__data[this.count + 1] = value
    this.count++
    this.shiftUp(this.count)
  }

  // Get the max value in max heap 
  public extractMax(): number {
    if (this.count <= 0) {
      throw new Error('The max heap is empty')
    }
    const maxValue = this.__data[1]
    this.swap(1, this.count)
    this.count--
    this.shiftDown(1)
    return maxValue
  }

  public static heapify(arr: number[]) {

  }
  // To promise the property of max heap when insert a new element
  private shiftUp(index: number) {
    while (index > 1 && this.__data[index] > this.__data[Math.floor(index / 2)]) {
      this.swap(index, Math.floor(index / 2))
      index = Math.floor(index / 2)
    }
  }

  // To promise the property of the max heap when extract the greatest element
  private shiftDown(index: number) {
    while(2 * index <= this.count) {
      let j = 2 * index
      if (j + 1 <= this.count && this.__data[j] < this.__data[j + 1]) {
        j += 1
      }

      if (this.__data[index] < this.__data[j]) {
        this.swap(index, j)
        index = j
      } else {
        break
      }
    }
  }
  private swap(i: number, j: number) {
    const       temp: number = this.__data[i]
    this.__data [i]          = this.__data[j]
    this.__data [j]          = temp
  }

}