let NUM_OF_PARTICLES = 100;
let particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);


    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        particles.push(new Particle(width / 2, height / 2));
    }
}

function draw() {
    background(255);

    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        let p = particles[i];
        p.bounce();
        p.move();
        p.display();
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpd = random(-8, 8);
        this.ySpd = random(-4, 4);
        this.dia = random(25, 70);
    }
    // methods
    bounce() {
        if (this.x < 0) {
            this.x = 0;
            this.xSpd = this.xSpd * -1;
        }
        else if (this.x > width) {
            this.x = width;
            this.xSpd = this.xSpd * -1;
        }
        if (this.y < 0) {
            this.y = 0;
            this.ySpd = this.ySpd * -1;
        }
        else if (this.y > height) {
            this.y = height;
            this.ySpd = this.ySpd * -1;
        }
    }
    move() {
        // this.xSpd = this.xSpd * 0.98;
        // this.ySpd = this.ySpd * 0.98;
        this.x += this.xSpd;
        this.y += this.ySpd;
    }
    display() {
        push();
        translate(this.x, this.y);
        if (mouseIsPressed == true) {
            fill(random(255), random(255), random(255));
        }
        else {
            fill(random(255), random(255), random(255), random(20));
        }
        strokeWeight(random(10, 20));
        circle(0, 0, this.dia);
        pop();
    }
}
