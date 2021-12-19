package club.linyimin.algorithm.sort.insertion;

import club.linyimin.algorithm.sort.Sort;

/**
 * @author yiminlin
 * @date 2021/12/19 7:39 pm
 * @description insertion sort implementation
 **/
public class InsertionSort implements Sort {

    @Override
    public int[] sort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            for (int j = i; j > 0; j--) {
                if (arr[j] >= arr[j-1]) {
                    break;
                }
                int temp = arr[j];
                arr[j - 1] = temp;
                arr[j] = arr[j - 1];
            }
        }
        return arr;
    }
}
