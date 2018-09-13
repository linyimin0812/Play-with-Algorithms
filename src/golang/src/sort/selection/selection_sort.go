package selection

// Sort implement the selection sort algorithm
func Sort(arr []int) {
	for i := 0; i < cap(arr); i++ {
		minIndex := i
		for j := i + 1; j < cap(arr); j++ {
			if arr[minIndex] > arr[j] {
				minIndex = j
			}
		}
		temp := arr[minIndex]
		arr[minIndex] = arr[i]
		arr[i] = temp
	}
}
