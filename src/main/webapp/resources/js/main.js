





let r;
let button;

let inner = document.getElementById("inner");

function draw(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    drawChar(context);
    drawText(context);
    drawCoordinates(context);

}



function drawCoordinates(context){
    context.font="12px Times New Roman";
    context.fillStyle="black";
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(0, context.canvas.height/2);
    context.lineTo(context.canvas.width, context.canvas.height/2);
    context.stroke();
    context.beginPath();
    context.moveTo(context.canvas.width , context.canvas.height/2 )
    context.lineTo(context.canvas.width -6, context.canvas.height/2 -6);
    context.lineTo(context.canvas.width -6, context.canvas.height/2 +6);
    context.fill();
    context.fillText("X", context.canvas.width-10, context.canvas.height/2 + 15, 20);


    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(context.canvas.width/2, context.canvas.height);
    context.lineTo(context.canvas.width/2, 0);
    context.stroke();
    context.beginPath();
    context.moveTo(context.canvas.width/2, 0 )
    context.lineTo(context.canvas.width/2 + 6, 6);
    context.lineTo(context.canvas.width/2 - 6, 6);
    context.fill();
    context.fillText("Y", context.canvas.width/2+15,10, 20);

}

function drawChar(context){
    let x = context.canvas.width/2;
    let y = context.canvas.height/2;
    let step = (context.canvas.height/2 - (context.canvas.height/2)/7)/2;
    context.fillStyle = "#3DAEFFFF";

// Рисуем треугольник
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x +step,y);
    context.lineTo(x, y - 2*step);
    context.fill();

// Рисуем квадрат
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x - 2* step,y);
    context.lineTo(x - 2 * step,y + step);
    context.lineTo(x, y + step);
    context.fill();

// Рисуем сектор
    context.beginPath();
    context.moveTo(x,y);
    context.arc(x,y, step,2*Math.PI, 5*Math.PI/2,false);
    context.fill();
}

function drawText(context){
    let R_val = ["-R", "-R/2"," R/2", "R"];
    let step = (context.canvas.height/2 - (context.canvas.height/2)/7)/2;
    let x = context.canvas.width/2;
    let y = context.canvas.height/2;


    // Рисуем по оси x
    let count = 0;
    drawCoordinates(context);
    context.font="12px Times New Roman";
    for (let i = -2; i<=2; i++){
        if (i!==0){

            context.fillText(R_val[count],x + i *step  ,y-6, 100 );

            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(x + i *step, y+6);
            context.lineTo(x + i *step, y-6);
            context.stroke();
            count++;
        }
    }
    count = 3;
    for (let i = -2; i<=2; i++){
        if (i!==0){

            context.fillText(R_val[count],x + 6  ,y+ i*step, 100 );
            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(x + 6, y + i *step);
            context.lineTo(x -6 , y + i *step);
            context.stroke();
            count--;
        }
    }
}

    function changeDots(nR){



        if (nR == null ){
            return;
        }

        let table = document.getElementById("resultTable");


        let row = table.rows;

        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        draw();

        if(table !== undefined){
            for (let i = 0; i < row.length; ++i){

                let nX = parseFloat(row[i].cells[0].innerText);
                let nY = parseFloat(row[i].cells[1].innerText);

                let realX = nX*0.856/(nR)*250+250;
                let realY =250 - nY*0.856/(nR)*250;
                let style = checkHit(nX, nY, nR);
                drawDot(realX,realY, style);

            }
        }

    }
    function drawDot(X, Y, color){
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.fillStyle = color;
        context.beginPath();
        context.arc(X, Y, 6,0, 2*Math.PI);
        context.fill();
    }


    function drawDotByClick(X, Y){
        let style = checkHit(X, Y, r);
        let dx = X*0.856/(r)*250+250;
        let dy =250 - Y*0.856/(r)*250;
        drawDot(dx,dy, style);
    }


    function buttonClick(value, thisButton) {
        $('#messageR').text("");

        if (button != null) button.style.backgroundColor = 'white';
        r = value;

        $('#r').val(r);
        thisButton.style.backgroundColor = 'firebrick';
        button = thisButton;
        changeDots(value);

    }

    function canvasClick(e){

        if (r == null ){
            alert("Невозможности определения координат точки. Введите радиус!");
            return;
        }
        x = ((e.offsetX - 250)/250* r)/0.856;
        y = ((250 -e.offsetY )/250 * r)/0.856;
        $("input[name=\"send:click-x\"]").val(x);
        $("input[name=\"send:click-y\"]").val(y);
        $("input[name=\"send:click-r\"]").val(r);
        document.getElementById("send:click").click();

    }


    function checkHit(x, y, r){
       let hit = (x>= 0 && y >= 0 && r >= y + 2*x)|| (x<=0 && x >= -r && y <=0 && y >= -r/2)||(x>=0 && y <= 0 && (x*x + y*y <= r*r/4));
       if (hit){
           return "green";
       }else{
           return "red";
       }
    }









