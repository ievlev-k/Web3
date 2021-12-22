$(function (){
    function updateTime() {
        clock.innerHTML = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    }

    function clock(){
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let day = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        if (h<10){
            h = "0" +h;
        }
        if (m<10){
            m = "0" +m;
        }
        if (s<10){
            s = "0" +s;
        }
        let time = h + ":" + m + ":" + s;


        document.getElementById("time").innerHTML = time;
        document.getElementById("day").innerHTML = day;


    }
    clock();
    setInterval(clock,8000);

});