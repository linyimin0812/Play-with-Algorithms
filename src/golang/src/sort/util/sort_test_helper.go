package util

import (
	"log"
	"math/rand"
	"time"
)

// GenerateRandomArray Generate a random array, which value between rangeL and rangeR
// The array's length is n
func GenerateRandomArray(n int, rangeL int, rangeR int) []int {
	arr := make([]int, n)
	for i := 0; i < n; i++ {
		arr[i] = rand.Intn((rangeR-rangeL)+1) + rangeL
	}
	return arr
}

// IsSorted judge a array whether is in order
// if the arr is in order return true
// else return false
func IsSorted(arr []int) bool {
	isSorted := true
	for i := 1; i < cap(arr); i++ {
		if arr[i] < arr[i-1] {
			isSorted = false
			break
		}
	}

	return isSorted
}

// GenerateRandomNearlyOrderArray generate a nearly order array
func GenerateRandomNearlyOrderArray(n int, swapTime int) []int {
	arr := make([]int, n)
	for i := 0; i < n; i++ {
		arr[i] = i
	}

	for i := 0; i < swapTime; i++ {
		a := rand.Intn(n)
		b := rand.Intn(n)
		arr[a], arr[b] = arr[b], arr[a]
	}
	return arr
}

type sort func([]int)

// TestComplexity calculate the sorting required time
func TestComplexity(sortName string, sortFunc sort, arr []int) {
	start := time.Now().UnixNano() / 1000000
	sortFunc(arr)
	end := time.Now().UnixNano() / 1000000
	log.Printf("end = %d", end)
	if ok := IsSorted(arr); ok {
		time := float64(end-start) / 1000
		log.Printf("SortTestHelper %s spend %f", sortName, time)
	} else {
		log.Fatalf("SortTestHelper %s faild, the arr is disorder", sortName)
	}
}
