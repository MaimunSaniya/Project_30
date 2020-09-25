const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload(){
  img = loadImage("polygon2.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,400,800,20);
  platform = new Ground(440,300,250,15);

  
  box16 = new Box(440,155);

  box13 = new Box(410,195);
  box14 = new Box(440,195);
  box15 = new Box(470,195);

 
  box8 = new Box(380,235);
  box9 = new Box(410,235);
  box10 = new Box(440,235);
  box11 = new Box(470,235);
  box12 = new Box(500,235);

 
  box1 = new Box(350,275);
  box2 = new Box(380,275);
  box3 = new Box(410,275);
  box4 = new Box(440,275);
  box5 = new Box(470,275);
  box6 = new Box(500,275);
  box7 = new Box(530,275);

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   slingshot = new SlingShot(polygon,{x:100,y:200});
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  platform.display();

  fill("lightblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("lightpink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("lightgreen");
  box13.display();
  box14.display();
  box15.display();
  fill("#F4F4A6");
  box16.display();

  imageMode(CENTER);
  image(img, polygon.position.x, polygon.position.y, 40,40);

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    slingshot.attach();
  }
}