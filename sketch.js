var speed , thickness

function setup() {
    
   thickness = random (20,150)
  
  createCanvas(800,400);
 
  
  
  bullet = createSprite(30, 200, 50, 20);
  bullet.velocityX = 150
  bullet.shapeColor = ("gold");
  
  wall = createSprite (700 , 200 , thickness , 200)

}

function draw() {
  background("black"); 
  
  if (thickness > 100 ){
      
     wall.shapeColor = ("green");   
  }
  
  if (thickness < 100){
    wall.shapeColor = ("red");
  }
  
  if(bullet.isTouching(wall)){
        bullet.velocityX = 0
    }
  
  drawSprites();
}