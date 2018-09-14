package insertion

// Sort implement the insertion sort algorithm
func Sort(arr []int) {
	for i := 1; i < cap(arr); i++ {
		for j := i; j > 0; j-- {
			if arr[j] < arr[j-1] {
				arr[j-1], arr[j] = arr[j], arr[j-1]
			} else {
				break
			}
		}
	}
}

// SortOptimization optimized the implementation of insertion sort
// by reducing the elements swap times
func SortOptimization(arr []int) {
	for i := 1; i < cap(arr); i++ {
		j := i
		currentValue := arr[j]
		for j = i; j > 0; j-- {
			if currentValue < arr[j-1] {
				arr[j] = arr[j-1]
			} else {
				break
			}
		}
		arr[j] = currentValue
	}
}
