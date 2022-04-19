xpos = 200
ypos = 200
dx = 5;
dy = 3;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  rect(10,ypos,10,80);
  rect(380,mouseY,20,100);
  ellipse(xpos,ypos,20,20);
  if (xpos>=width-20 || xpos==20)
    {
      dx = -dx
    }
  if (ypos>=height-20 || ypos==20)
    {
      dy = -dy
    }
  fill('pink');
  text('PONG GAME',155,210);
  for (var i=0; i < 400; i+=20) {
     line(200,i,200,i+10);
  } 
  xpos = xpos +dx;
  ypos = ypos +dy;
}