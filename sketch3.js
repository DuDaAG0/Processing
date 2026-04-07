new p5((p) => {
  p.setup = function() {
   let canvas = p.createCanvas(400, 400);
   p.noStroke();  
   canvas.elt.tabIndex = 1;
   canvas.elt.focus(); 
   p.fill(250, 0, 0);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.circle(p.mouseX, p.mouseY, 15);
    }
  };

  p.keyPressed = function() {
    if (p.key === 'r'){
      p.fill(255, 0, 0);
    }
    if (p.key === 'g'){
      p.fill(0, 255, 0);
    }
    if (p.key === 'b'){
      p.fill(0, 0, 255);
    }
    if (p.key === 'x'){
      p.background(255);
      p.fill(250, 0, 0);
    }
  };
},"zeichenprogramm");

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(800, 400);
    p.background(255);
     p.noStroke();
     p.fill(250, 0, 0);
  };

  p.draw = function() {
    if (p.mouseIsPressed && p.mouseX < p.width / 2) {
      p.circle(p.mouseX, p.mouseY, 15);
    }
    if (p.mouseIsPressed && p.mouseX > p.width / 2){
      p.rect(p.mouseX, p.mouseY, 15, 15);
    }
    if (p.key === 'r'){
      p.fill(255, 0, 0);
    }
    if (p.key === 'g'){
      p.fill(0, 255, 0);
    }
    if (p.key === 'b'){
      p.fill(0, 0, 255);
    }
    if (p.key === 'x'){
      p.background(255);
      p.fill(250, 0, 0);
    }
  };
}, "sketch_zeichenprogramm_advanced");

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(800, 400);
    p.background(255);
     p.noStroke();
     p.fill(250, 0, 0);
  };

  p.draw = function() {
    if (p.mouseIsPressed && p.mouseX < p.width / 2) {
      p.circle(p.mouseX, p.mouseY, 15);
      p.rect(400 + p.mouseX, p.mouseY, 15, 15);
    }
    if (p.mouseIsPressed && p.mouseX > p.width / 2){
      p.rect(p.mouseX, p.mouseY, 15, 15);
      p.circle(p.mouseX - 400, p.mouseY, 15);
    }
    if (p.key === 'r'){
      p.fill(255, 0, 0);
    }
    if (p.key === 'g'){
      p.fill(0, 255, 0);
    }
    if (p.key === 'b'){
      p.fill(0, 0, 255);
    }
    if (p.key === 'x'){
      p.background(255);
      p.fill(250, 0, 0);
    }
  };
}, "sketch_synchrones_zeichnen");

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(800, 400);
    p.background(255);
    p.noStroke();
    p.fill(250, 0, 0);
  };

  p.draw = function() {
    if (p.mouseIsPressed && p.mouseX < p.width / 2) {
      p.circle(p.mouseX, p.mouseY, 15);
      p.rect(800 - p.mouseX, p.mouseY, 15, 15);
    }
    if (p.mouseIsPressed && p.mouseX > p.width / 2){
      p.rect(p.mouseX, p.mouseY, 15, 15);
      p.circle(800 - p.mouseX, p.mouseY, 15);
    }
    if (p.key === 'r'){
      p.fill(255, 0, 0);
    }
    if (p.key === 'g'){
      p.fill(0, 255, 0);
    }
    if (p.key === 'b'){
      p.fill(0, 0, 255);
    }
    if (p.key === 'x'){
      p.background(255);
      p.fill(250, 0, 0);
    }
  };
}, "sketch_achsenspiegelung");

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255);
    p.noStroke();
    p.fill(250, 0, 0);
  };

  p.draw = function() {
  if (p.mouseIsPressed && p.mouseX < p.width / 2 ) {
      p.circle(p.mouseX, p.mouseY, 15);
      p.circle(p.mouseX, 400 - p.mouseY, 15);
      p.rect(400- p.mouseX,p.mouseY, 15, 15);
      p.rect(400- p.mouseX, 400 - p.mouseY, 15, 15);
    }
    if (p.mouseIsPressed && p.mouseX > p.width / 2) {
      p.circle(400 - p.mouseX, 400 - p.mouseY, 15);
      p.circle(400 - p.mouseX, p.mouseY, 15);
      p.rect(p.mouseX, p.mouseY, 15, 15);
      p.rect(p.mouseX, 400 - p.mouseY, 15, 15);
    }
     if (p.key === 'r'){
      p.fill(255, 0, 0);
    }
    if (p.key === 'g'){
      p.fill(0, 255, 0);
    }
    if (p.key === 'b'){
      p.fill(0, 0, 255);
    }
    if (p.key === 'x'){
      p.background(255);
      p.fill(250, 0, 0);
    }
  };
}, "sketch_punktspiegelung");