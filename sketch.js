var a= 50;
var b= 50;
var newHeight= a + b;




function setup(){
    createCanvas(600,400);
    background(50);
}



function draw(){
    //background(50);
    noStroke();
    fill(255,128,168);
    ellipse(mouseX,mouseY,100,newHeight);
    
    
}