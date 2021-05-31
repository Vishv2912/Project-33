var bg,bgImage,b
var snow ,snowImg
var ball,ballImg,ball2,ball2Img;
var boy,boyImg
var ground;
var snowfall
var fall
var man,manImg

function preload(){
  manAnimation=loadAnimation("b1.png","b2.png","b3.png","b4.png")
manImage=loadAnimation("b1.png")
  bgImage=loadImage("snow3.jpg")
snow1Img=loadImage("snow4.webp")
snow2Img=loadImage("snow5.webp")

ball1Img=loadImage("snow1.jpg")
ball2Img=loadImage("snow2.jpg")
boyImg=loadImage("boy.png")

fall=loadAnimation("fall1.png","fall2.png")

}

function setup() {
  createCanvas(800,400);
  
  bg=createSprite(400,200,50,50);
  bg.addImage(bgImage)


ball=createSprite(400,250,10,10);
ball.addImage(ball1Img)
ball.scale=1.7
ball.visible=false


ball2=createSprite(400,200,10,10)
ball2.addImage(ball2Img)
ball2.scale=1.7
ball2.visible=false


man=createSprite(40,390,100,100);
man.addAnimation("men",manAnimation);
man.scale=1
//man.depth>ball
//man.depth>ball2
//man.depth>bg

boy=createSprite(200,320,10,10)
boy.addImage(boyImg)
boy.scale=0.8
boy.visible=false;
ground=createSprite(400,400,800,5)

ground1=createSprite(0,200,5,400)
ground2=createSprite(800,200,5,400)



fallGroup=new Group();

}

function draw() {
  ball.depth=ball2.depth=bg.depth

  man.collide(ground)
  man.collide(ground1)
  man.collide(ground2)
//man.x=400;
//man.y=300;
man.velocityX=0;

if(keyCode==RIGHT_ARROW){
 // man.x=man.x+10;
  man.velocityX=man.velocityX+3
}


  if(keyCode==UP_ARROW){
  ball.visible=true;
  }



  if(keyCode==DOWN_ARROW){
    ball2.visible=true;
  }

  snowFall();
drawSprites();
textSize(15)
fill("yellow")
text("Press Right & Left Arrow To Walk",400,20)
textSize(15)
fill("yellow")
text("Press Up & Down Arrow To Change Background",4,20)

}



function snowFall(){
if(frameCount%5==0){
snowfall=createSprite(Math.round(random(10,790)),-10,10,10)
snowfall.addAnimation("fallingSnow",fall);
snowfall.scale=0.1
snowfall.velocityY=1.7
snowfall.lifetime=200;
fallGroup.add(snowfall);
}



}