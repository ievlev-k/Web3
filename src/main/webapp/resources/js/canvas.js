// let context = $('canvas')[0].getContext('2d');
//
//
//
// function draw(context){
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//     drawChar(context);
//     drawText(context);
//     drawCoordinates(context);
//
//     let newPoint = document.getElementsByClassName("circle")
//     alert(point.length);
//     for (let j = 0; j<newPoint.length; j++){
//         let newX = newPoint[j].dataset.x;
//         let newY = newPoint[j].dataset.y;
//         let newR = newPoint[j].dataset.r;
//         alert(newR);
//
//
//         let realX = newX*0.856/(newR)*250+250;
//         let realY =250 - newY*0.856/(newR)*250;
//
//         context.beginPath();
//         context.arc(realX,realY, 6,0, 2*Math.PI);
//         context.fill();
//
//     }
//
// }
//
//
//
// function drawCoordinates(context){
//     context.font="12px Times New Roman";
//     context.fillStyle="black";
//     context.beginPath();
//     context.lineWidth = 2;
//     context.moveTo(0, context.canvas.height/2);
//     context.lineTo(context.canvas.width, context.canvas.height/2);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(context.canvas.width , context.canvas.height/2 )
//     context.lineTo(context.canvas.width -6, context.canvas.height/2 -6);
//     context.lineTo(context.canvas.width -6, context.canvas.height/2 +6);
//     context.fill();
//     context.fillText("X", context.canvas.width-10, context.canvas.height/2 + 15, 20);
//
//
//     context.beginPath();
//     context.lineWidth = 2;
//     context.moveTo(context.canvas.width/2, context.canvas.height);
//     context.lineTo(context.canvas.width/2, 0);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(context.canvas.width/2, 0 )
//     context.lineTo(context.canvas.width/2 + 6, 6);
//     context.lineTo(context.canvas.width/2 - 6, 6);
//     context.fill();
//     context.fillText("Y", context.canvas.width/2+15,10, 20);
//
// }
//
// function drawChar(context){
//     let x = context.canvas.width/2;
//     let y = context.canvas.height/2;
//     let step = (context.canvas.height/2 - (context.canvas.height/2)/7)/2;
//     context.fillStyle = "#3DAEFFFF";
//
// // Рисуем треугольник
//     context.beginPath();
//     context.moveTo(x,y);
//     context.lineTo(x +step,y);
//     context.lineTo(x, y - 2*step);
//     context.fill();
//
// // Рисуем квадрат
//     context.beginPath();
//     context.moveTo(x,y);
//     context.lineTo(x - 2* step,y);
//     context.lineTo(x - 2 * step,y + step);
//     context.lineTo(x, y + step);
//     context.fill();
//
// // Рисуем сектор
//     context.beginPath();
//     context.moveTo(x,y);
//     context.arc(x,y, step,2*Math.PI, 5*Math.PI/2,false);
//     context.fill();
// }
//
// function drawText(context){
//     let R_val = ["-R", "-R/2"," R/2", "R"];
//     let step = (context.canvas.height/2 - (context.canvas.height/2)/7)/2;
//     let x = context.canvas.width/2;
//     let y = context.canvas.height/2;
//
//
//     // Рисуем по оси x
//     let count = 0;
//     drawCoordinates(context);
//     context.font="12px Times New Roman";
//     for (let i = -2; i<=2; i++){
//         if (i!==0){
//
//             context.fillText(R_val[count],x + i *step  ,y-6, 100 );
//
//             context.beginPath();
//             context.lineWidth = 2;
//             context.moveTo(x + i *step, y+6);
//             context.lineTo(x + i *step, y-6);
//             context.stroke();
//             count++;
//         }
//     }
//     count = 3;
//     for (let i = -2; i<=2; i++){
//         if (i!==0){
//
//             context.fillText(R_val[count],x + 6  ,y+ i*step, 100 );
//             context.beginPath();
//             context.lineWidth = 2;
//             context.moveTo(x + 6, y + i *step);
//             context.lineTo(x -6 , y + i *step);
//             context.stroke();
//             count--;
//         }
//     }
// }
//
// $(window).on("load", ()=> {
//
//
//     draw(context);
//
//
// });
//
//
// function reset(){
//     if (x != null) x.value = null;
//     if (y != null) y.value = null;
//     if (r != null) r.value = null;
//     x = null;
//     y = null;
//     r = null;
//     if (radio != null) radio.checked = false;
//     if (button != null) button.style.backgroundColor = 'White';
//     $('#rValue').val("");
//     button.style.backgroundColor = 'White';
//     radio.checked = false;
//     $('#reset-flag').value = "true";
// }
//
//
// function canvasClick(e){
//     if (r == null ){
//         alert("Невозможности определения координат точки. Введите радиус!")
//         return;
//     }
//     x = ((e.offsetX - 250)/250* r)/0.856;
//     y = ((250 -e.offsetY )/250 * r)/0.856;
//     $("input[name=\"send:click-x\"]").val(x);
//     $("input[name=\"send:click-y\"]").val(y);
//     $("input[name=\"send:click-r\"]").val(r);
//     document.getElementById("send:click").click();
//
//     createCircle();
//
//     pointCircle();
//
//
// }
//
// function pointCircle(){
//     let can = $('canvas')[0].getContext('2d');
//     let point = document.getElementsByClassName("circle")
//
//     alert(point.length);
//     for (let j = 0; j<point.length; j++){
//         let newX = point[j].dataset.x;
//         let newY = point[j].dataset.y;
//         let newR = point[j].dataset.r;
//         alert(newR);
//
//
//         let realX = newX*0.856/(newR)*250+250;
//         let realY =250 - newY*0.856/(newR)*250;
//
//         can.beginPath();
//         can.arc(realX,realY, 6,0, 2*Math.PI);
//         can.fill();
//
//     }
// }
//
// function createCircle(){
//
//     let inner = document.getElementById("inner");
//     let newCircle = document.createElement('input');
//
//     newCircle.classList.add("circle");
//
//     newCircle.setAttribute("data-x", x);
//     newCircle.setAttribute("data-y", y);
//     newCircle.setAttribute("data-r", r);
//
//     inner.appendChild(newCircle);
//
// }