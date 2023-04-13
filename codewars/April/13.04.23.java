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