function setup(){
  createCanvas (800, 800);

  ellipseMode(CENTER);
 
  
}

function draw() {
  
  background(0);

  for(let i=50; i<mouseX;i+=50){
  for(let j=50; j<mouseY;j+=50){  
    
  noFill()
  stroke(mouseX-i, i, mouseY-j)
  strokeWeight(3)
    let d = dist(mouseX,mouseY,i+width/2, j+height/2)
    
    let r=d/10
 ellipse(i, j, r, r);
  
ellipse(i*3, j*3, r-20, r-20)
ellipse(i*2, j*2, r-30, r-30)
   rect(250,250,300,300)
       rect(150,150,500,500)
     ellipse(400,400,800,800)
  }
    
  
}
}



