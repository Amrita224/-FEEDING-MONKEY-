var survivalTime=0;
var PLAY=1;
var END=0;
var gameState=1;
var monkey , monkey_running,Background;
var banana ,bananaImage, stone,stoneImage,BackgroundImage;
var score;
var bnanaGroup,obstacleGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  BackgroundImage = loadImage("jungle2.jpg");
 
}



function setup() {
  createCanvas(400,310);
  
  
  
  monkey=createSprite(80,225,20,20);
  monkey.addAnimation("moving" ,monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,255,900,5);
  ground.velocityX=-4;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstacleGroup=createGroup();
  
  
}


function draw() {
background("white");
  
  if (gameState === PLAY){
    survivalTime=survivalTime+Math.round(frameRate()/60);
 
    if (keyDown("SPACE") && monkey.y>=220){
      monkey.velocityY=-10;
      }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if (ground.x<0){
    ground.x=ground.width/2;
    }
 }  

    
  
  Banana();
  Stone();
  
  
  drawSprites();
  
  stroke("green");
  textFont("bold");
  textSize(30);
  text("Survival time:"+survivalTime,150,50);
  
}

function Banana(){
if (frameCount%100==0){
  banana=createSprite(400,20,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-(4+  survivalTime/150);
  banana.y=Math.round(random(210,160));
  banana.lifetime=100;
  bananaGroup.add(banana);
  } 
}


function Stone(){
if (frameCount%300==0){
  stone=createSprite(300,237,50,50);
  stone.addImage(stoneImage);
  stone.scale=0.09;
  stone.velocityX=-(7+ survivalTime/150);
  stone.lifetime=100;
  obstacleGroup.add(stone);
  
  }
  
}







