var car,wall;
var speed,width;

function setup() {
  createCanvas(1600,400);
  speed = random(50,90);
  width = random(400,1500); 

  car = createSprite(50,180,40,20);
  car.velocityX = speed;
  car.shapeColor =  "green";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22509;
    if(deformation > 180){
      car.shapeColor = "yellow";
    }
    if(deformation > 100){
      car.shapeColor = "red";
    }

  }

  drawSprites();
}
