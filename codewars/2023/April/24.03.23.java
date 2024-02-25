public public class Wall {
    // write your code here
    private double width;
    private double height;
    public Wall() {
        // no-arg constructor
    }
    
    public Wall(double width, double height){
        if (width < 0) {
            this.width = 0;
        } else {
            this.width = width;
        }

        if (height < 0) {
            this.height = 0;
        } else {
            this.height = height;
        }
    }
    
    public double getWidth(){
        return width;
    }
    public double getHeight(){
        return height;
    }
    public void setWidth(double val){
        if (val < 0){
            this.width = 0;
        } else {
        this.width = val;
        }
    }
    public void setHeight(double val){
        if (val < 0){
            this.height = 0;
        } else {
        this.height = val;
        }
    }
    
    public double getArea(){
        return this.width * this.height;
    }
} {
    
}
