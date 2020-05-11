var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;

  for (var j = 50; j < 700; j=j+100) {
    for (var i = 50; i < 600 + 1; i=i+100) {
     plinkos.push(new Plinko(i,j));
    }
  }
}

function draw() {
  background("black");
  Engine.update(engine);
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   particles.push(new Particle(random(0, 600), random(0,700)));
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
}