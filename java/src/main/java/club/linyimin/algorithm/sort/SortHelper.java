package club.linyimin.algorithm.sort;

import sun.jvm.hotspot.utilities.Assert;

/**
 * @author yiminlin
 * @date 2021/12/15 12:02 am
 * @description sort helper
 **/
public class SortHelper {

    /**
     * generate random array which contains n elements, and the value of element between left and right
     * @param n number of element
     * @param left the min value(inclusive)
     * @param right the max value(exclusive)
     * @return a random array
     */
    public static int[] generateRandomArray(int n, int left, int right) {

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = (int) (Math.random() * (right - left) + left);
        }

        return arr;
    }

    /**
     * generate random array which contains n elements, and the value of element between left and right
     * @param n number of element
     * @param left the min value(inclusive)
     * @param right the max value(exclusive)
     * @return a random array
     */
    public static long[] generateRandomArray(int n, long left, long right) {

        long[] arr = new long[n];

        for (int i = 0; i < n; i++) {
            arr[i] = (long) (Math.random() * (right - left) + left);
        }

        return arr;
    }

    /**
     * generate random array which contains n elements, and the value of element between left and right
     * @param n number of element
     * @param left the min value(inclusive)
     * @param right the max value(exclusive)
     * @return a random array
     */
    public static float[] generateRandomArray(int n, float left, float right) {

        float[] arr = new float[n];

        for (int i = 0; i < n; i++) {
            arr[i] = (float) (Math.random() * (right - left) + left);
        }

        return arr;
    }

    /**
     * generate random array which contains n elements, and the value of element between left and right
     * @param n number of element
     * @param left the min value(inclusive)
     * @param right the max value(exclusive)
     * @return a random array
     */
    public static double[] generateRandomArray(int n, double left, double right) {

        double[] arr = new double[n];

        for (int i = 0; i < n; i++) {
            arr[i] = (Math.random() * (right - left) + left);
        }

        return arr;
    }


    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }

    public static boolean isSorted(long[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }

    public static boolean isSorted(float[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }

    public static boolean isSorted(double[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }


    public static void print(int[] arr) {
        StringBuilder sb = new StringBuilder();
        for (int j : arr) {
            sb.append(j).append(" ");
        }
        System.out.println(sb.toString());
    }

    public static void print(long[] arr) {
        StringBuilder sb = new StringBuilder();
        for (long l : arr) {
            sb.append(l).append(" ");
        }
        sb.append(arr[arr.length - 1]);
        System.out.println(sb.toString());
    }

    public static void print(float[] arr) {
        StringBuilder sb = new StringBuilder();
        for (float v : arr) {
            sb.append(v).append(" ");
        }
        System.out.println(sb.toString());
    }

    public static void print(double[] arr) {
        StringBuilder sb = new StringBuilder();
        for (double v : arr) {
            sb.append(v).append(" ");
        }
        System.out.println(sb.toString());
    }

    public static void testComplexity(Sort sort, int[] arr) {
        long start = System.currentTimeMillis();
        int[] sortedArr = sort.sort(arr);
        long end = System.currentTimeMillis();
        boolean isSorted = isSorted(sortedArr);

        Assert.that(isSorted, "the result of " + sort.getClass().getSimpleName() + " is not in order.");

        System.out.println(sort.getClass().getSimpleName() + " cost is " + (end - start) + "ms, " + "array lenght is " + arr.length);
    }
}
