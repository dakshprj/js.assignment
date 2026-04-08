import java.util.Scanner;

public class MirrorCorridor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Taking inputs N and K
        // Note: The prompt mentions prompt() and alert(), which are JS functions.
        // In Java, we use Scanner for input and System.out for output.
        System.out.print("Enter N: ");
        int N = sc.nextInt();
        System.out.print("Enter K: ");
        int K = sc.nextInt();

        int result = -1;

        // Iterate through X from 0 to 100,000
        for (int x = 0; x <= 100000; x++) {
            int sum = N + x;

            // Check if divisible by K AND is a palindrome
            if (sum % K == 0 && isPalindrome(sum)) {
                result = x;
                break; // Found the smallest X, exit loop
            }
        }

        // Display the result
        System.out.println(result);
    }

    // Helper method to check if a number is a palindrome
    public static boolean isPalindrome(int num) {
        String str = Integer.toString(num);
        String reversedStr = new StringBuilder(str).reverse().toString();
        return str.equals(reversedStr);
    }
}