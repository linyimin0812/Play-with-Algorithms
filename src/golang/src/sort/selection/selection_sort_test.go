package selection

import (
	"sort/util"
	"testing"
)

func TestSort(t *testing.T) {
	n := 10000
	arr := util.GenerateRandomArray(n, 0, n)
	util.TestComplexity("selectionSort", Sort, arr)
	if ok := util.IsSorted(arr); ok {
		t.Log("pass")
	} else {
		t.Errorf("faild, arr should be in order")
	}
}
