package util;
import result.Result;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.io.Serializable;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;



public class DBWorker implements Serializable {
    private List<Result> list;
    private DataSource dataSource = null;
    private Connection connection = null;

    public DBWorker(List<Result> results ){
        this.list = results;
    }
    private final String DRIVER = "org.postgresql.Driver";
    public void con(){
        try {
            Class.forName(DRIVER);
            this.connection = DriverManager.getConnection("jdbc:postgresql://localhost:11111/studs", "s311834", "uzm839");
            this.connection.createStatement().execute("CREATE TABLE IF NOT EXISTS results(x float, y float , r float, res boolean)");
        }catch (ClassNotFoundException | SQLException exception){
            System.out.println("Соединение не установлено!");
        }
    }




    public void addResult(float x, float y, float r, boolean result){

            try {
                Class.forName(DRIVER);
                this.connection = DriverManager.getConnection("jdbc:postgresql://pg:5432/studs", "s311834", "uzm839");
                this.connection.createStatement().execute("CREATE TABLE IF NOT EXISTS results(x float, y float , r float, res boolean)");

            PreparedStatement statement = connection.prepareStatement("INSERT INTO results(x,y,r,res) values(?, ?, ?, ?)");
            statement.setFloat(1, x);
            statement.setFloat(2, y);
            statement.setFloat(3, r);
            statement.setBoolean(4,result);
            statement.executeUpdate();
            statement.close();
        }catch (ClassNotFoundException | SQLException exception){
            exception.printStackTrace();
            System.out.println("Соединение не установлено!");
        }
    }

    public Connection getConnection(){
        return connection;
    }

    public void clear(){

        try {
            Class.forName(DRIVER);
            this.connection = DriverManager.getConnection("jdbc:postgresql://pg:5432/studs", "s311834", "uzm839");
            this.connection.createStatement().execute("CREATE TABLE IF NOT EXISTS results(x float, y float , r float, res boolean)");
            PreparedStatement statement = connection.prepareStatement("DELETE FROM results");
            statement.executeUpdate();
            statement.close();;
        }catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        list.clear();
    }

    public void getResults(){
        try {
            Class.forName(DRIVER);
            this.connection = DriverManager.getConnection("jdbc:postgresql://pg:5432/studs", "s311834", "uzm839");
            this.connection.createStatement().execute("CREATE TABLE IF NOT EXISTS results(x float, y float , r float, res boolean)");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM results");
            while (resultSet.next()){
                Result newResult = new Result();
                newResult.setX(resultSet.getFloat(1));
                newResult.setY(resultSet.getFloat(2));
                newResult.setR(resultSet.getFloat(3));
                newResult.setResult(resultSet.getBoolean(4));
                list.add(newResult);
            }
        }catch (SQLException| ClassNotFoundException e){
            e.printStackTrace();
        }
    }



    public List<Result> getList(){
        return list;
    }
}
