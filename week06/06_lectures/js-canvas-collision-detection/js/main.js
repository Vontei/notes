var $canvas = null;
var context = null;
var framesPerSecond = null;
var keys = [];
var square1 = {x:0, y:0, w:20, h:20, speed: 4, color:'black'};
var square2 = {x:200, y:170, w:20, h:20, speed: 4, color:'black'};

// initialize - grab canvas element, define context, set frames per second
function init() {
  $canvas = $('#canvas-container')[0];
  context = $canvas.getContext('2d');
  framesPerSecond = 60;
}

// create the canvas and squares
function draw() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
  context.fillStyle = square1.color;
  context.fillRect(square1.x, square1.y, square1.w, square1.h);
  context.fillStyle = square2.color;
  context.fillRect(square2.x, square2.y, square2.w, square2.h);
  updateCanvas();
}

function updateCanvas() {

  // event handlers for key presses
  $(document).on('keydown', function(event){
    keys[event.keyCode] = true;
  });
  $(document).on('keyup', function(event){
    keys[event.keyCode] = false;
  });

  // change color if collision occurs
  if(checkCollision(square1, square2)) {
    square1.color = "red";
    square2.color = "red";
  } else {
    square1.color = "black";
    square2.color = "black";
  }

  // contrain square1 to canvas
  if(square1.x < 0) {
    square1.x = 0;
  }
  if(square1.y < 0) {
    square1.y = 0;}
  if(square1.y > 300) {
    square1.y = 300;
  }
  if(square1.x > 280) {
    square1.x = 280;
  }

  // move square1 to canvas
  if(keys[39]) {
    square1.x += square1.speed;
  }
  if(keys[37]) {
    square1.x -= square1.speed;
  }
  if(keys[38]) {
    square1.y -= square1.speed;
  }
  if(keys[40]) {
    square1.y += square1.speed;
  }

  // // contrain square2 to canvas
  // if(square2.x < 0) {
  //   square2.x = 0;
  // }
  // if(square2.y < 0) {
  //   square2.y = 0;
  // }
  // if(square2.y > 300) {
  //   square2.y = 300;
  // }
  // if(square2.x > 300) {
  //   square2.x = 300;
  // }

  // // contrain square1 to canvas
  // if(keys[68]) {
  //   square2.x += square2.speed;
  // }
  // if(keys[65]) {
  //   square2.x -= square2.speed;
  // }
  // if(keys[87]) {
  //   square2.y -= square2.speed;
  // }
  // if(keys[83]) {
  //   square2.y += square2.speed;
  // }
}

// check for collision
function checkCollision(first, second) {
  return !(
    first.x > second.x + second.w ||
    first.x + first.w < second.x ||
    first.y > second.y + second.h ||
    first.y + first.h < second.y
  );
}
