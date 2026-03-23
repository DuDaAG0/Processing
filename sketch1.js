new p5((p) => {

  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(255); // 
  };

  p.draw = function() {
    p.fill(150, 0, 0);  
    p.circle(p.mouseX, p.mouseY, 20);
  };

},"sketch1");
new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  };
  p.draw = function() {
    p.fill(150, 0, 0);
    p.background(255);
    p.circle(p.mouseX, p.mouseY, 20);
  };
},"sketch2");
new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  };
  p.draw = function() {
    p.fill(0,p.mouseX,p.mouseY); 
    p.circle(p.mouseX, p.mouseY, 20);
  };
}, "sketch3");

new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  };
  p.draw = function() {
    p.background(255);
    p.line(0,0, p.mouseX, p.mouseY);
  };
}, "sketch4");

new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  };
  p.draw = function() {
    p.background(255);
    p.fill (0, 0, p.mouseX);
    p.rect(0,0, p.mouseY, p.mouseY);
  };
}, "sketch_rechteck");

new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  };
  p.draw = function() {
    p.background(255);
    p.line(p.mouseX,0, p.mouseX, 300);
    p.line(0,p.mouseY, 300, p.mouseY);
  };
}, "sketch_fadenkreuz");

new p5((p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(0);
  };
  p.draw = function() {
    p.fill(255, 255, 255);
    p.circle(p.mouseX, p.mouseY, 15);
    p.noStroke();
  };
}, "sketch_radiergummi");