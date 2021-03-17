
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var rubber1,stone1,hammer1;
var ground;
var iron1;
var sand1,sand2,sand3,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12,sand13,sand14,sand15;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
  hammer1 = new Hammer(200,10);
  stone1 = new Stone(300,400,80,80);
  rubber1 = new Rubber(600,400,70);
  iron1 = new Iron(200,400,200,90);
  sand1 = new Sand(510,400,5);
  sand2 = new Sand(515,400,5);
  sand3 = new Sand(520,400,5);
  sand4 = new Sand(525,400,5);
  sand5 = new Sand(530,400,5);
  sand6 = new Sand(535,400,5);
  sand7 = new Sand(540,400,5);
  sand8 = new Sand(545,400,5);
  sand9 = new Sand(550,400,5);
  sand10 = new Sand(555,400,5);
  sand11= new Sand(560,400,5);
  sand12 = new Sand(565,400,5);
  sand13 = new Sand(570,400,5);
  sand15 = new Sand(580,400,5);
 }

function draw() {
  
   background("cyan");
   Engine.update(engine);
   hammer1.display();
   ground.display();
   stone1.display();
   rubber1.display();
   iron1.display();
   sand1.display();
   sand2.display();
   sand3.display();
   sand4.display();
   sand5.display();
   sand6.display();
   sand7.display();
   sand8.display();
   sand9.display();
   sand10.display();
   sand11.display();
   sand12.display();
   sand13.display();
   
   sand15.display();
   } 