public class Person {
    // write your code here
    private String firstName;
    private String lastName;
    private int age;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public void setFirstName(String str) {
        firstName = str;
    }

    public void setLastName(String str) {
        lastName = str;
    }

    public void setAge(int num) {
        if (num < 0 || num > 100) {
            this.age = 0;
        } else {
            this.age = num;
        }
    }

    public boolean isTeen() {
        if (age > 12 && age < 20) {
            return true;
        }
        return false;
    }

    public String getFullName() {
        if (firstName == "" && lastName == "") {
            return "";
        } else if (firstName == "" && lastName != "") {
            return lastName;
        } else if (firstName != "" && lastName == "") {
            return firstName;
        } else {
            return firstName + " " + lastName;
        }
    }
}