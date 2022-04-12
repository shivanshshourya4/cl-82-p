var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;



Canvas = document.getElementById("myCanvas");

ctx = canvas.getElementById("2d");
color = "black";
w_of_line =;
R_of_circle = document.getElementById("radius");


function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.AddEventListner("mousedown", my_mousedown);
canvas.AddEventListner("mouseup", my_mouseup);
canvas.AddEventListner("mousemove", my_mousemove);

function my_mousedown(e) 
{
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("w_of_line").value;
  Radius_of_circle = document.getElementById("R_of_circle").value;

  mouseEvent = "mouseDown";
}

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("w_of_line").value;
    Radius_of_circle = document.getElementById("R_of_line").value;

    mouseEvent = "mouseUp";
}

function my_mousemove(e) 
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    [
     console.log("Current position of x and y =");
     console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

     ctx.beginPath();
     ctx.styleStroke = color;
     ctx.lineWidth = w_of_line;
     ctx.arc = (current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
     ctx.stroke();
    ]
}