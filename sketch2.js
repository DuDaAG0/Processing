new p5(function(p) {
  p.setup = function() {
    p.createCanvas(300, 300);
  };

  p.draw = function() {

    if (p.mouseX < p.width / 2) {
      p.background(0); 
    } else {
      p.background(255); 
    }

  };
}, "sketch_hintergrund_mousex");

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
    if (p.mouseX > 150){
       p.fill(0, 250, 0);
    }
    else{
      p.fill(250, 0, 0);
    }
    p.circle(p.mouseX, p.mouseY, 20);
  };
}, "sketch_leuchtender_kreis_spur");


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

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(300, 300);
  };

  p.draw = function() {
    p.background(255);

    if ((p.mouseX < p.width / 2 && p.mouseY < p.height / 2)|| (p.mouseX > p.width / 2 && p.mouseY > p.height / 2)) {
      p.fill(255, 0, 0);
      p.circle(p.mouseX, p.mouseY, 20);
    } else {
      p.fill(0, 255, 0);
      p.rect(p.mouseX - 10, p.mouseY - 10, 20, 20);
    }
  };
}, "sketch_viertel");