export class MaxHeap {

  // The array stores max heap
  private __data: Array<number>
  // The capacity of array which store the max heap
  private capacity: number
  // The size of max heap
  private count: number

  constructor (capacity: number) {
    // For we store element from index 1
    this.__data     = new Array<number>(capacity + 1)
    this.capacity   = capacity
    this.count      = 0
    this.__data[0]  = 0
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

  // To promise the property of max heap when insert a new element
  private shiftUp(index: number) {
    while (index > 1 && this.__data[index] > this.__data[Math.floor(index / 2)]) {
      this.swap(index, Math.floor(index / 2))
      index = Math.floor(index / 2)
    }
  }

  private swap(i: number, j: number) {
    const       temp: number = this.__data[i]
    this.__data [i]          = this.__data[j]
    this.__data [j]          = temp
  }

}