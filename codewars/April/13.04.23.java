//First And Last Digit Sum
public class FirstLastDigitSum {
    // write your code here
    public static int sumFirstAndLastDigit(int number) {
        int lastDigit = number % 10;
        while (number >= 10) {
            number /= 10;
        }
        int firstDigit = number;
        if ((firstDigit + lastDigit) >= 0) {
            return firstDigit + lastDigit;
        } else {
            return -1;
        }
    }
}

// Even Digit Sum
public class EvenDigitSum {
    // write your code here
    public static int getEvenDigitSum(int number) {
        if (number >= 0) {
            int sumof = 0;
            String numberString = Integer.toString(number); // Convert number to string
            for (int i = 0; i < numberString.length(); i++) {
                char digitChar = numberString.charAt(i); // Get the character at the current position
                int digit = Character.getNumericValue(digitChar);
                if (digit % 2 == 0) {
                    sumof += digit;
                }
            }
            return sumof;
        } else {
            return -1;
        }
    }
}

// Shared Digit
public class SharedDigit {
    // write your code here
    public static boolean hasSharedDigit(int a, int b) {
        if ((a >= 10 && a <= 99) && (b >= 10 && b <= 99)) {
            int valueA = 0;
            String aStr = Integer.toString(a);
            for (int i = 0; i <= aStr.length(); i++) {
                char digitChar = aStr.charAt(i); // Get the character at the current position
                int digit = Character.getNumericValue(digitChar);
                if (digit == 2) {
                    valueA++;
                }
            }
            int valueB = 0;
            String bStr = Integer.toString(b);
            for (int i = 0; i <= bStr.length(); i++) {
                char digitChar = bStr.charAt(i); // Get the character at the current position
                int digit = Character.getNumericValue(digitChar);
                if (digit == 2) {
                    valueB++;
                }
            }
            if (valueB == valueA) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
}

// Last Digit Checker
public class LastDigitChecker {
    // write your code here
    public static boolean hasSameLastDigit(int a, int b, int c) {
        if ((a >= 10 && a <= 1000) && (b >= 10 && b <= 1000) && (c >= 10 && c <= 1000)) {
            System.out.println(a % 10);
            int lastA = a % 10;
            int lastB = b % 10;
            int lastC = c % 10;
            if ((lastA == lastB) || (lastB == lastC) || (lastC == lastA)) {
                return true;
            }
            return false;

        } else {
            return false;
        }
    }

    public static boolean isValid(int d) {
        if (d >= 10 && d <= 1000) {
            return true;
        } else {
            return false;
        }
    }
}

// All Factors
public class FactorPrinter {
    // write your code here
    public static void printFactors(int number) {
        if (number < 1) {
            System.out.println("Invalid Value");
        } else {
            // String numberStr = Integer.toString(number)
            for (int i = 1; i <= number; i++) {
                if (number % i == 0) {
                    System.out.println(i);
                }
            }
        }
    }
}