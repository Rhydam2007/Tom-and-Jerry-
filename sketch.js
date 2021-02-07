
function preload() {
tom1=loadAnimation("images/cat1.png");
tom2=loadAnimation("images/cat2.png","images/cat3.png");
tom3=loadAnimation("images/cat4.png");
backGroundImage=loadImage("images/garden.png");
jerry1=loadAnimation("images/mouse1.png");
jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600,50,50);
    tom.addAnimation("tomSleeping",tom1);
    tom.scale=0.2;
   

    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerry2);
    jerry.scale=0.15;
    
}

function draw() {

    background(backGroundImage);
  
  if(tom.x-jerry.x<(tom.width-jerry.width)/2){

  

  tom.velocityX=0;
  tom.addAnimation("tom2",tom3)
 tom.x=300;
  tom.scale=0.2;
tom.changeAnimation("tom2")

jerry.addAnimation("jerry2",jerry3)
jerry.scale=0.15;
jerry.changeAnimation("jerry2")


  }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("tomRunning",tom2);
tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryTeasing",jerry2);
jerry.frameDelay=25;
jerry.changeAnimation("jerryTeasing");

}


}
