var paint = [];

function setup(){
  createCanvas(1200,600);

}

function draw(){
  background(0);


if(mouseIsPressed){
  var point = {
  x: mouseX,
  y: mouseY
  }
  paint.push(point);
}



beginShape();
stroke(255);
strokeWeight(2);
noFill();

for(var i = 0; i <paint.length;i++){
  vertex(paint[i].x,paint[i].y)
}
endShape();
}