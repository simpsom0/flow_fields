// global variables
var detail = 20; // higher num = less nodes
var canvas_offset = 15;
var rows, cols;
var inc = 0.1; // how fast the flow field morphs
var zoff = 0, xoff, yoff; // starting position in flow field

// main object
class Vector {
  constructor(x, y, direction, magnitude) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.magnitude = magnitude;
  }

  // setters
  setDirection(newDirection) { this.direction = newDirection; }
  setMagnitude(newMagnitude) { this.magnitude = newMagnitude; }
  setPos(newPos) { this.x = this.setX(newPos[0]);
                   this.y = this.setY(newPos[1]); }
  setX(newX) { this.x = newX; }
  setY(newY) { this.y = newY; }

  // getters
  getDirection() { return this.direction; }
  getMagnitude() { return this.magnitude;  }
  getPos() { return [this.x, this.y]; }
}

// ran once before draw()
function setup() {
  createCanvas(windowWidth - canvas_offset, windowHeight - canvas_offset);
  //createCanvas(1000, 800);

  calcDimensions();
  background(255);
}


// loops infinitely 
function draw() {
  stroke(255);
  yoff = 0;
  for(var y = 0; y < rows; y++) {
    xoff = 0;
    for(var x = 0; x < cols; x++){
      var r = noise(xoff, yoff, zoff) * 255;
      var g = noise(xoff, yoff, zoff + 50) * 50;
      var b = noise(xoff, yoff, zoff+ 100) * 255;
      fill(r, g, b);
      xoff += inc;
      rect(x*detail, y*detail, detail, detail);
    }
    yoff += inc;
  }
  zoff += inc;
}


// uses the var 'detail' to
// calculate rows & cols. Translates to
// amount of flow field nodes
function calcDimensions() {
  rows = floor(height / detail);
  cols = floor(width / detail);
}


// resizes the canvas, then 
// re-calculates how many rows & columns there should be
function windowResized() {
  resizeCanvas(windowWidth - canvas_offset, windowHeight - canvas_offset);
  calcDimensions();
}