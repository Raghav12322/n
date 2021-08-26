canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
var last_position_x,last_position_y;
color = "black";
width_of_line=2;
radius=10;
var width = screen.width;
var new_width = screen.width-70;
var new_heigth = screen.heigth-300;

if(width<992){
    document.getElementById("my_canvas").width = new_width;
    document.getElementById("my_canvas").heigth = new_heigth;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touch_start",my_touchstart);

function my_touchstart(e)
{

    console.log("my_tochstart");

    color=document.getElementById("color").value;

    width_of_line=document.getElementById("width").value;

    radius=document.getElementById("radii").value;

    last_position_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_y = e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{
   
   console.log("my_touchmove")

    current_position_touch_X = e.touches[0].clientX-canvas.offsetLeft;
   current_position_touch_Y = e.touches[0].clientY-canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last position of XandY cordinate = ");
    console.log("X = " + last_position_x + "Y = " + last_position_y);

   ctx.moveTo(last_position_x,last_position_y) ;

   console.log("current position of X and Y cordinates = ");
   console.log("X = " + current_position_touch_X + "Y = " + current_position_touch_Y);
   ctx.arc(current_position_touch_X,current_position_touch_Y,radius,0,width_of_line*Math.PI);
   ctx.stroke();
   
   last_position_x = current_position_touch_X;
   last_position_y = current_position_touch_Y; 
}
