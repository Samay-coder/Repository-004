var bullet,wall;
var speed,weight,thickness,damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 15, 25);
  wall=createSprite(1200, 200, thickness, height/2);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

wall.shapeColor=color(80,80,80);

bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  }

  if (damage > 10) {
    wall.shapeColor="red"
  }

  if (damage < 10) {
    wall.shapeColor="green"
  }

  drawSprites();
}