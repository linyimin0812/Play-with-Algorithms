export class IndexMaxHeap {

  // Store the index max heap elements
  private __data: number[]
  // Store the index max heap elements' indexes
  private __indexes: number[]
  // The capacity of index max heap
  private __capacity: number
  // The number of element in index max heap
  private __count: number

  constructor (capacity: number) {
    this.__data         = new Array<number>(capacity + 1)
    this.__indexes      = new Array<number>(capacity + 1)
    this.__capacity     = capacity
    this.__count        = 0
    this.__data[0]      = 0
    this.__indexes[0]   = 0

  }

  /**
   * return the number of elements in index max heap
   */
  public size(): number {
    return this.__count
  }

  /**
   * If the index max heap is empty then return true, or return false
   */
  public isEmpty(): boolean {
    return this.__count === 0
  }

  /**
   * insert a element into index max heap
   * @param item 
   */
  public insert(item: number) {

    if (this.__capacity <= this.__count) {
      throw new Error(`The heap is full, can't insert a new item`)
    }
                   this.__count  += 1
    this.__data   [this.__count]  = item
    this.__indexes[this.__count]  = this.__count
    this.__shiftUp(this.__count)
  }

  /**
   * Get the maximum element in index max heap
   */
  public extractMax(): number {
    const result = this.__data[this.__count]
    this.__swap(1, this.__count)
    this.__count -= 1
    this.__shiftDown(1)
    return result
  }

  /**
   * Get the index of maximum element in index max heap
   */
  public extractMaxIndex(): number {
    if (this.__count === 0) {
      throw new Error(`Can't get a element index from an empty heap`)
    }
    // From user perspective, the index start from 0
    const result = this.__indexes[1] - 1

    this.__swap(1, this.__count)
    this.__count -= 1
    this.__shiftDown(1)
    return result
  }

  /**
   * Get item by index
   */
  public getItem(i: number): number {
    return this.__data[i + 1]
  }

  /**
   * Change ith element to newItem
   * @param i 
   * @param newItem 
   */
  public change(i: number, newItem: number) {
    // From user perspective, the index starts from 0
    i += 1
    // Find the actual element related index
    for (let j = 1; j <= this.__count; j++) {
      if (this.__indexes[j] === i) {
        this.__data[this.__indexes[j]] = newItem
        this.__shiftDown(j)
        this.__shiftUp(j)
        return
      }
    }
  }

  get data(): number[] {
    return this.__data
  }

  get indexes(): number[] {
    return this.__indexes
  }

  private __shiftDown(i: number) {
    // Compare the actual element while swap the related index
    while(i * 2 <= this.__count) {
      let j = i * 2
      if (j + 1 <= this.__count && this.__data[this.__indexes[j]] < this.__data[this.__indexes[j + 1]]) {
        j += 1
      }
      if (this.__data[this.__indexes[i]] < this.__data[this.__indexes[j]]) {
        this.__swap(i, j)
        i = j
      } else {
        break
      }
    }
  }

  private __shiftUp(i: number) {
    // Compare with actual element while swap the related index
    let parent = Math.floor(i / 2)
    while (parent >= 1) {
      if (this.__data[this.__indexes[i]] > this.__data[this.__indexes[parent]]) {
        this.__swap(i, parent)
        i = parent
        parent = Math.floor(i / 2)
      } else {
        break
      }
    }
  }
  private __swap(i: number, j: number) {
    const          temp = this.__indexes[i]
    this.__indexes[i]   = this.__indexes[j]
    this.__indexes[j]   = temp
  }

} 