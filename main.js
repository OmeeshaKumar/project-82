canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";

var color="black";
var width_of_line= 2;

canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e) {

     mouseevent = "mousedown";

 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e) {
     mouseevent = "mouseup";
     
 }

 canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 20, 0, 2*Math.PI);
console.log("last_postion_of_x, last_postion_of_y=");
console.log("x="+last_postion_of_x+"y="+last_postion_of_y);
ctx.moveTo(last_postion_of_x, last_postion_of_y);
console.log("current postion of x and y =");
console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);

ctx.stroke();
}
last_postion_of_x=current_position_of_mouse_x;
last_postion_of_y=current_position_of_mouse_y;
}

