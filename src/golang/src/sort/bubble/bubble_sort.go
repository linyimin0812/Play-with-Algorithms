package bubble

// Sort implements the bubble sort algorithm
func Sort(arr []int)  {
	for i := 0; i < cap(arr); i++ {
		for j := 0; j < cap(arr) - i -1; j++ {
			if arr[j] > arr[j + 1] {
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
			}
		}
	}
}

// SortOptimization optimize the implementation of bubble sort
// If the sequence is in order then retrun directly
func SortOptimization(arr []int) {
	for i := 0; i < cap(arr); i++ {
		flag := false
		for j := 0; j < cap(arr) - i - 1; j++ {
			if arr[j] > arr[j + 1] {
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
				flag = true
			}
		}
		if !flag {
			break
		}
	}
}