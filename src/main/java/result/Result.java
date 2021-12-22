package result;


import java.io.Serializable;
import java.time.OffsetDateTime;


public class Result implements Serializable {


    private float x;


    private float y;


    private float r ;





    private boolean result;

    public Result(){
    }

    public Result(float x, float y, float r, boolean result) {
        this.result = result;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public Result(float x, float y, float r) {

        this.x = x;
        this.y = y;
        this.r = r;
    }






    public boolean getResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public void checkHit(){
        boolean hit = (x>= 0 && y >= 0 && r >= y + 2*x)|| (x<=0 && x >= -r && y <=0 && y >= -r/2)||(x>=0 && y <= 0 && (x*x + y*y <= r*r/4));
        setResult(hit);
    }



}
