// Area Calculator
public class AreaCalculator {
    public static double area(double radius) {
        if (radius < 0) {
            return -1.0;
        } else {
            return Math.PI * (radius * radius);
        }
    }

    public static double area(double x, double y) {
        if (x < 0 || y < 0) {
            return -1.0;
        } else {
            return x * y;
        }
    }
}

// Minutes To Years and Days Calculator
public class MinutesToYearsDaysCalculator {
    // write your code here
    public static void printYearsAndDays(long minutes) {
        if (minutes < 0) {
            System.out.println("Invalid Value");
        } else {
            long years = minutes / (60 * 24 * 365);
            long remainingMinutes = minutes % (60 * 24 * 365);
            long days = remainingMinutes / (60 * 24);
            System.out.println(minutes + " min = " + years + " y and " + days + " d");
        }
    }
}

// Equality Printer
public class IntEqualityPrinter {
    // write your code here
    public static void printEqual(int a, int b, int c) {
        if (a < 0 || b < 0 || c < 0) {
            System.out.println("Invalid Value");
        } else if (a == b && b == c) {
            System.out.println("All numbers are equal");
        } else if (a != b && b != c && a != c) {
            System.out.println("All numbers are different");
        } else {
            System.out.println("Neither all are equal or different");
        }
    }
}


// Playing Cat
public class PlayingCat {
    // write your code here
    public static boolean isCatPlaying(boolean summer, int temperature) {
        if (summer && (temperature <= 45 && temperature >= 25)) {
            return true;
        } else if (!summer && (temperature <= 35 && temperature >= 25)) {
            return true;
        } else {
            return false;
        }
    }
}