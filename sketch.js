

function preload(){
bg=loadImage("images/iss.png")
sleep=loadAnimation("images/sleep.png")
brush=loadAnimation("images/brush.png")
gym=loadAnimation("images/gym11.png","images/gym12.png")
eat=loadAnimation("images/eat1.png","images/eat2.png")
drink=loadAnimation("images/drink1.png","images/drink2.png")
move=loadAnimation("images/move.png","images/move2.png")
bath=loadAnimation("images/bath1.png","images/bath2.png")
}



function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400,200,15,50)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
  background=createSprite(800,400)
  background.addImage("background",bg)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y=350
  astronaut.velocityX=0
  astronaut.velocityY=0
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
    }

    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("bathing",bath)
      astronaut.changeAnimation("bathing")
      astronaut.y=350
      astronaut.velocityX=0
      astronaut.velocityY=0
      }

      if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("eating",eat)
        astronaut.changeAnimation("eating")
        astronaut.y=350
        astronaut.velocityX=0
        astronaut.velocityY=0
        }
}