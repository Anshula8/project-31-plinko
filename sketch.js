const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var divisionHeight=300;

var p, ground1, divi, divi1, divi2, divi3, divi4, divi5, divi6;

var particles = [];
var plinkos = [];
var divisions =[];

function setup() {
  createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  //p1 = new Particle(300, 50, 10);
  ground1 = new Ground();
  divi1= new Division(100);
  divi2= new Division(200);
  divi3= new Division(300);
  divi4= new Division(400);
  divi5= new Division(500);
  divi6= new Division(600);
  divi = new Division(0);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background('black');
  
  if(frameCount%60 === 0){
    //var a = Math.random(1, 599);
    console.log()
    
    particles.push(new Particle(random(15, 585)));
  } 
  for (var a = 10; a < 600; a=a+60) {
    plinko = new Plinko(a, 50);
    plinko.display();
  } 
  for (var b = 40; b < 600; b=b+60) {
    plinko = new Plinko(b, 100);
    plinko.display();
  }
  for (var a = 10; a < 600; a=a+60) {
    plinko = new Plinko(a, 150);
    plinko.display();
  }
  for (var a = 40; a < 600; a=a+60) {
    plinko = new Plinko(a, 200);
    plinko.display();
  }
  for (var a = 10; a < 600; a=a+60) {
    plinko = new Plinko(a, 250);
    plinko.display();
  }
  console.log('particles array length:'+particles.length)
  
  ground1.display();
  divi1.display();
  divi2.display();
  divi3.display();
  divi4.display();
  divi5.display();
  divi6.display();
  divi.display();
  //p.display();

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
}