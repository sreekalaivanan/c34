const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2,box3, box4, box5, box6,box7,box8,box9,box10,box11,box12;
var ball, rope, ground;
var engine, world;



function setup() {
  createCanvas(1200,800);//or 1200,800
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(900,790,1800,20)

  //box1-6= 900,  box7-12= 800, box13-20 = 700
  box1 = new Box(900, 100,70,70);
  box2 = new Box(900, 100,70,70);
  box3 = new Box(900, 100,70,70);
  box4 = new Box(900, 100,70,70);
  box5 = new Box(900, 100,70,70);
  box6 = new Box(900, 100,70,70);
  box7 = new Box(800, 100,70,70);
  box8 = new Box(800, 100,70,70);
  box9 = new Box(800, 100,70,70);
  box10 = new Box(800, 100,70,70);
  box11 = new Box(800, 100,70,70);
  box12 = new Box(800, 100,70,70);

  ball = new Ball(400,200,20,20);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground.display();
  ball.display();

}