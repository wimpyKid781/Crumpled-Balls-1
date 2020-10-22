
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(5,5,10)
	leftSide = new Dustbin(width/2-100,height-80,20,100)
	rightSide = new Dustbin(width/2+100,height-80,20,100)
	bottom = new Dustbin(width/2,height-35,200,20)
	ground = new Ground(width/2,height,800,5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-12})

	}
}


