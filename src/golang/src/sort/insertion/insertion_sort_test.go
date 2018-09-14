package insertion

import (
	"sort/util"
	"testing"
)

func TestSort(t *testing.T) {
	n := 100000
	arr := util.GenerateRandomArray(n, 0, n)
	arrNearlyOrder := util.GenerateRandomNearlyOrderArray(n, 10)

	util.TestComplexity("insertionSort sort random array", Sort, arr)
	util.TestComplexity("insertionSort sort nearly order array", Sort, arrNearlyOrder)

	if ok := util.IsSorted(arr); ok {
		t.Log("Sort random array using insertionSort, pass")
	} else {
		t.Error("Sort random array using insertionSort, faild")
	}

	if ok := util.IsSorted((arrNearlyOrder)); ok {
		t.Log("Sort nearly order array using insertionSort, pass")
	} else {
		t.Error("Sort nearly order array using insertionSort, faild")
	}
}

func TestSortOptimization(t *testing.T) {
	n := 50000
	arr := util.GenerateRandomArray(n, 0, n)
	arrNearlyOrder := util.GenerateRandomNearlyOrderArray(n, 10)

	util.TestComplexity("insertionSortOptimization sort random array", SortOptimization, arr)
	util.TestComplexity("insertionSortOptimization sort nearly order array", SortOptimization, arrNearlyOrder)

	if ok := util.IsSorted(arr); ok {
		t.Log("Sort random array using insertionSortOptimization, pass")
	} else {
		t.Error("Sort random array using insertionSortOptimization, faild")
	}

	if ok := util.IsSorted((arrNearlyOrder)); ok {
		t.Log("Sort nearly order array using insertionSortOptimization, pass")
	} else {
		t.Error("Sort nearly order array using insertionSortOptimization, faild")
	}
}
