var box;
function setup() {
  createCanvas(700,700);
 box = createSprite (350, 350, 20, 20);
}

function draw() 
{
  background(30);
 if (keyDown(RIGHT_ARROW)){
box.x=box.x+2
 }
 if (keyDown(LEFT_ARROW)){
  box.x=box.x-2
   }
   if (keyDown(UP_ARROW)){
    box.y=box.y-2
     }
     if (keyDown(DOWN_ARROW)){
      box.y=box.y+2
       }
drawSprites();
}




