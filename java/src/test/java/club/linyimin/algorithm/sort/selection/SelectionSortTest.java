package club.linyimin.algorithm.sort.selection;

import club.linyimin.algorithm.sort.SortHelper;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @author yiminlin
 * @date 2021/12/15 11:10 pm
 * @description selection sort test case
 **/
public class SelectionSortTest {
    @Test
    public void sort100Test() {

        int n = 100;

        int[] arr = SortHelper.generateRandomArray(n, 0, n);
        SortHelper.testComplexity(new SelectionSort(), arr);
    }

    @Test
    public void sort1000Test() {
        int n = 1000;
        int[] arr = SortHelper.generateRandomArray(n, 0, n);
        SortHelper.testComplexity(new SelectionSort(), arr);
    }

    @Test
    public void sort10000Test() {
        int n = 10000;
        int[] arr = SortHelper.generateRandomArray(n, 0, n);
        SortHelper.testComplexity(new SelectionSort(), arr);
    }

    @Test
    public void sort100000Test() {
        int n = 100000;
        int[] arr = SortHelper.generateRandomArray(n, 0, n);
        SortHelper.testComplexity(new SelectionSort(), arr);
    }

    @Test
    public void sort1000000Test() {
        int n = 1000000;
        int[] arr = SortHelper.generateRandomArray(n, 0, n);
        SortHelper.testComplexity(new SelectionSort(), arr);
    }
}