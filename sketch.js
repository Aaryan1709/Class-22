const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var ground;


function setup() {
  createCanvas(800,400);


  // create an engine
engine = Engine.create();
world = engine.world;

var option = {
  isStatic:true
}

var ball_option = {
  restitution:1.0
}

ground = Bodies.rectangle(400, 390, 800, 20,option);

ball = Bodies.circle(200,100,10,ball_option);

World.add(world,[ground,ball]);


console.log(ground);
console.log(ball);
}

function draw() {
  background(0,0,50); 
  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

  fill("red");
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
}