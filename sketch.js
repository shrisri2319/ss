
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,wall1,wall2,wall3 ;
var ball ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,600,800,25);
	ground.shapeColor ="green";

	var options={
		isStatic : false,
		restitution :0.3,
		friction: 0.5,
		density:1.2
	}
	wall1 = createSprite(550,550,20,100);
	wall1.shapeColor = "red";
	wall2 = createSprite(400,550,20,100);
	wall2.shapeColor = "red";
	wall3 = createSprite(475,600,150,20);
	wall3.shapeColor = "red";
	ball = createSprite(100,500,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.bounce(wall1);
  ball.bounce(wall3);
  ball.bounce(wall2);
  

  if(keyDown(LEFT_ARROW)){
	  ball.velocityX = -5;

  }
  
  if(keyDown(RIGHT_ARROW)){
	ball.velocityX = +5;

}
 
if(keyDown(UP_ARROW)){
	ball.velocityY = +5;

}
 
if(keyDown(DOWN_ARROW)){
	ball.velocityY = -5;

}

  drawSprites();
 
}





