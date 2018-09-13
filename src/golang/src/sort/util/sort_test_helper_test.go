package util

import (
	"testing"
)

// Generate a random a array
func TestGenerateRandomArray(t *testing.T) {
	n := 10000
	arr := GenerateRandomArray(n, 0, n)

	if ok := IsSorted(arr); ok && cap(arr) == n {
		t.Error("faild")
	} else {
		t.Log("pass")
	}
}

// Generate a nearly order array
func TestGenerateRandomNearlyOrderArray(t *testing.T) {
	n := 10000
	arr := GenerateRandomNearlyOrderArray(n, 0)

	if ok := IsSorted(arr); ok {
		t.Log("pass")
	} else {
		t.Error("faild, the arr should be in order")
	}

	arr = GenerateRandomNearlyOrderArray(n, 10)

	if ok := IsSorted(arr); ok {
		t.Error("Error, the arr should not in order")
	} else {
		t.Log("pass")
	}
}

func TestIsSorted(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6, 7}

	if ok := IsSorted(arr); ok {
		t.Log("pass")
	} else {
		t.Error("faild, the arr is in order, should return true")
	}
}
