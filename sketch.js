// global variables
var detail = 40;
var canvas_offset = 15;
var rows, cols;
var inc = 0.01

function setup() {
  createCanvas(windowWidth - canvas_offset, windowHeight - canvas_offset);
  
  rows = floor(height / detail);
  cols = floor(width / detail);

  background(0);
}

function draw() {
  var yoff = 0;
  for(var y = 0; y < rows; y++) {
    var xoff = 0;
    for(var x = 0; x < cols; x++){
      fill(random(255));
      rect(x*detail, y*detail, detail, detail);
      
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}