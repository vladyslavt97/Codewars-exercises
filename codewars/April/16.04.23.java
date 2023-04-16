//Flour Pack Problem
public class FlourPacker {
    // write your code here
    public static boolean canPack(int bigCount, int smallCount, int goal) {
        if (bigCount < 0 || smallCount < 0 || goal < 0) {
            return false;
        }
        int sum = (bigCount * 5) + smallCount;
        int leftover = (goal - ((bigCount - 1) * 5));

        if (sum >= goal) {
            if ((bigCount * 5) >= goal) {
                if (bigCount * 5 == goal) {
                    return true;
                } else if (leftover <= smallCount) {
                    return true;
                }
                return false;
            } else if (smallCount >= goal) {
                return true;
            } else if (sum == goal) {
                return true;
            } else if (sum >= goal && bigCount * 5 < goal) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}