
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var defender1Img,defender1
var blakeImg,blake
var field1Img,field1
var goalImg
var gameState = 1

function preload()
{
	defender1Img = loadImage('images/defender.png');
	blakeImg = loadImage('images/Blake.png');
	field1Img = loadImage('images/field.png');
	goalImg = loadImage('images/goal.png');

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	field1 = createSprite(400,350,800,700)
	field1.addImage('feild',field1Img)
	field1.scale = 5;
	defender1 = createSprite(400,350)
	defender1.addImage('defender',defender1Img)
	blake = createSprite(400,100)
	blake.addImage('blake',blakeImg)
	
	//goalImg = createSprite()

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  //if(gameState == 1){
	if(keyDown("UP_ARROW")){
		blake.y = blake.y-5
	}
	if(keyDown("DOWN_ARROW")){
		blake.y = blake.y+5
	}
	if(keyDown("LEFT_ARROW")){
		blake.x = blake.x-5
	}
	if(keyDown("RIGHT_ARROW")){
		blake.x = blake.x+5
	}
  }






