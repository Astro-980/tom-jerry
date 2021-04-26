var cat,catrunning,mouseimg,catimg,cad,mouse;
var backgroundimg
function preload() {
  backgroundimg=loadImage("images/garden.png");
  catrunning =   loadAnimation("images/cat2.png","images/cat3.png");
  mouseimg=loadImage("images/mouse2.png")
  catimg=loadImage("images/cat1.png")
  cad=loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
cat=createSprite(900,700);
mouse=createSprite(100,700);
mouse.addImage("mouse",mouseimg);
cat.addImage("cat",catimg);
}

function draw() {
 
    background(backgroundimg);
    mouse.scale = 0.20;
    cat.scale = 0.25
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
      cat.velocityX=0
      
    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5
  cat.addAnimation("running",catrunning);
  cat.changeAnimation("running");
}


}
