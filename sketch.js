const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var BALL,FLOOR;
var background1;
var MAN,manImg;
var Shooting,RING;



function preload(){

  background1 = loadImage("Background.jpg");
  manImg = loadImage("Man.png");

}




function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  

BALL = new ball(50,50,10,10)
FLOOR = new floor(400,350,800,20)
RING = new Ring(720,200)

Shooting = new shot(BALL.body,{x:100,y:100});

MAN = createSprite(100,220,10,10)
MAN.addImage(manImg)
MAN.scale = 0.5;




  Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);

 

  background(background1);  
  fill("white");
  textSize(15);
  text("Press space to try again",380,20)


  BALL.display()
  //Shooting.display();
  RING.display();


 
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(BALL.body,{x: mouseX, y: mouseY} )
  
  
  
  }

  function mouseReleased(){

    Shooting.fly()
    
    
    
    }

    function keyPressed(){
      if(keyCode === 32){
          Shooting.attach(BALL.body);
      }
  }