const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bgImg;
var ground, hero, fly;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var monster;

function preload() {
//preload the images here

bgImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(50, 635, 2200, 12);

  hero = new Hero(200, 615, 100, 100);

  fly = new Fly(hero.body,{x:200, y:615});

  block1 = new Block(500, 620, 50, 50);
  block2 = new Block(500, 570, 50, 50);
  block3 = new Block(500, 520, 50, 50);
  block4 = new Block(500, 470, 50, 50);
  block5 = new Block(500, 420, 50, 50);
  block6 = new Block(550, 620, 50, 50);
  block7 = new Block(550, 570, 50, 50);
  block8 = new Block(550, 520, 50, 50);
  block9 = new Block(550, 470, 50, 50);
  block10 = new Block(550, 420, 50, 50);

  monster = new Monster(800, 515, 400, 400);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
}