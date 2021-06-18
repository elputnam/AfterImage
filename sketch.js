let dance =[];
let num = 100;
//let l1;
let H = 100;
let wid = 0;
var cirx;
var ciry;
//let cx = 200;
//let cy = 200;
//let color = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  //l1 = new Lattice();
  for (let i = 0; i < num; i++){
    dance.push(new Lattice());
  }
  //background(255);
 //cirx = 0;
 //ciry = 0;
}

function draw() {
  background(10, 0.01);
  colorMode(HSB);
  noFill();
  strokeWeight(random(10));
  stroke(random(300, 360), random(100), random(360), random(0.5));
  circle(mouseX, mouseY, wid);
  //circle(cirx, ciry, wid);
  for (let i = 0; i < dance.length; i++) {
  dance[i].display();
  dance[i].step();
  dance[i].edges();
  }

  H += 1;
  wid += random(10);



  if (H > 300){
    H = 100;
  }

  if (wid > 1000){
    //cirx = random(width);
    //ciry = random(height);
    wid = 0;
  }
}

class Lattice{
  constructor(){
  //this.loc = createVector(width/2,height/2);
    this.loc = createVector(width, height);
    this.len = random(20, 60);
  }

  display(){
    //lines
    strokeWeight(1);
    //fill(H-50, random(100), random(360), 0.2);
    stroke(H, random(360), random(360));

    beginShape();
    vertex(this.loc.x, this.loc.y);
    vertex(this.loc.x + this.len, this.loc.y);
    vertex(this.loc.x + this.len, this.loc.y + this.len);
    endShape();
  }

  edges(){
    if (this.loc.x <= 0){
        this.loc.x += 5
    }
    if (this.loc.x >= width){
        this.loc.x -= 5
    }
    if (this.loc.y <= 0){
        this.loc.y += 5
    }
    if (this.loc.y >= height){
      this.loc.y -= 5
      }
    }

  step(){
    let choice = floor(random(4));
    if (choice == 0){
        this.loc.x+= random(5,10);
    }
    else if (choice == 1){
        this.loc.x -= random(5,10);
    }
    else if (choice == 2){
        this.loc.y += random(5,10);
    } else {
      this.loc.y -= random(5,10);
      }
    }
}
