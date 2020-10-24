const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var part1
var part2
var part3
var button
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(30,650,70);
	ground = new Ground(400,699,800,20);
	part1 = new Dustbin(597,580,20,175);
	part2 = new Dustbin(732,580,20,175);
	part3 = new Dustbin(660,680,170,20);
}

function draw() {
  background(211,211,211);
  fill(0,185,0);
  textSize(50);
  text("Press UP ARROW to shoot", 150, 50);
  fill(255,0,0);
  textSize(50);
  text("Press R to reset", 230, 150);
  Engine.update(engine);
  paper.display();
  part1.display();
  part2.display();
  part3.display();
  ground.display();
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x: 15, y:-25});
	}
	if (key == 'r'){
		Body.setVelocity(paper.body, {x:0,y:0});
		Body.setPosition(paper.body, {x:30, y:650});
	}
}