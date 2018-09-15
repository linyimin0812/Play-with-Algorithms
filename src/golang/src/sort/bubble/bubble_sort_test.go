package bubble

import (
	"testing"
	"sort/util"
)

func TestSort(t *testing.T) {
	n := 100000
	arr := util.GenerateRandomArray(n, 0, n)

	arrNearlyOrder := util.GenerateRandomNearlyOrderArray(n, 10)

	util.TestComplexity("bubbleSort random array", Sort, arr)

	util.TestComplexity("bubbleSort nearly order array", SortOptimization, arrNearlyOrder)

	if ok := util.IsSorted(arr); ok {
		t.Log("pass")
	} else {
		t.Error("bubbleSort random array error, the arr is not in order")
	}

	if ok := util.IsSorted(arrNearlyOrder); ok {
		t.Log("pass")
	} else {
		t.Error("bubbleSort nearly order array error, the arr is not in order")
	}
}
