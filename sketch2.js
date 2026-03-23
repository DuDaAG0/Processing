new p5((p) => {

  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(255); // 
  };

  p.draw = function() {
    if (p.mouseX > 150){
       p.fill(0, 250, 0);
    }
    else{
      p.fill(250, 0, 0);
    }
    p.background(255);
    p.circle(p.mouseX, p.mouseY, 20);
  };
},"sketch_leuchtender_kreis");

new p5((p) => {

  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(255); // 
  };
  p.draw = function() {
    p.background(255);
    if (p.mouseY > 150){
      p.fill(255, 0, 0);
      p.rect(p.mouseX, p.mouseY, 20,20)
    }
    else {
      p.fill(0, 255, 0);
      p.circle(p.mouseX, p.mouseY, 20);
    }
  };
},"sketch_mauszeiger_formen");

new p5((p) => {

  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(255); // 
  };
  p.draw = function() {
    p.background(255);
    if (p.mouseX < 150 && p.mouseY < 150){
      p.fill(255,0,0);
      p.circle(p.mouseX, p.mouseY, 20);
    }
    if (p.mouseX > 150 && p.mouseY < 150) {
      p.fill(0,255,0);
      p.circle(p.mouseX, p.mouseY, 20);
    }
    if (p.mouseX < 150 && p.mouseY > 150) {
      p.fill(255,0,0);
      p.rect(p.mouseX, p.mouseY, 20,20)
    }
    if (p.mouseX > 150 && p.mouseY > 150){
      p.fill(0,255,0);
      p.rect(p.mouseX, p.mouseY, 20,20)
    }
  };
},"sketch_mauszeiger_formen_farbe");

new p5((p) => {
  p.setup = function() {
   let canvas = p.createCanvas(300, 300);
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
    }
  };
},"zeichenprogramm");
