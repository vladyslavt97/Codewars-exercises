//casting in Java!!!
public class DecimalComparator{
 public static boolean areEqualByThreeDecimalPlaces(double num1, double num2){
     int num1Scaled = (int) (num1 * 1000);
    int num2Scaled = (int) (num2 * 1000);
    return num1Scaled == num2Scaled;
 } 
}