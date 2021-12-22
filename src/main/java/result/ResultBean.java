package result;


import util.DBWorker;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@ManagedBean(name = "resultBean")
@SessionScoped
public class ResultBean implements Serializable {


    private Result newResult;

    private ArrayList<Result> list = new ArrayList<Result>();
    private DBWorker dbWorker;

    public ResultBean(){

        this.newResult = new Result();
        dbWorker = new DBWorker(list);
        dbWorker.getResults();


    }
    public DBWorker getDbWorker(){
        return dbWorker;
    }

    public ResultBean(Result result, DBWorker dbWorker){
        this.newResult = result;
        this.dbWorker = dbWorker;
    }



    public Result getNewResult(){
        return newResult;
    }

    public void setNewResult(Result newResult){
        this.newResult = newResult;
    }

    public ArrayList<Result> getResults() {
        return list;
    }

    public void clear(){
        dbWorker.clear();
        list.clear();
    }

    public String addResult(){
        System.out.println("здесь");
        newResult.checkHit();
        if (validate(newResult)){
        Result finalResult = new Result(newResult.getX(), newResult.getY(), newResult.getR(), newResult.getResult());
        dbWorker.addResult(newResult.getX(), newResult.getY(), newResult.getR(), newResult.getResult());
        list.add(finalResult);}
//        Result resultForTable = new Result(newResult.getX(), newResult.getY(), newResult.getR(), newResult.getResult());
//        newResult = new Result(0,0,1,false);
        return "update";
    }

    public boolean validate(Result result){
        return result.getX() >= -3 && result.getX() <= 5 && result.getY() > -3 && result.getY() < 3 &&
                result.getR() >= 1 && result.getR() <= 3;
    }

    public ArrayList<Result> getList(){
        return list;
    }

}
