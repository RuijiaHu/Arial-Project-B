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
        p.moveSlowDown();
        p.display();
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpd = random(-20, 20);
        this.ySpd = random(-10, 10);
        this.dia = random(25, 70);
    }
    // methods
    moveSlowDown() {
        this.xSpd = this.xSpd * 0.98;
        this.ySpd = this.ySpd * 0.98;
        this.x += this.xSpd;
        this.y += this.ySpd;
    }
    display() {
        push();
        translate(this.x, this.y);

        fill(random(255), random(255), random(255), random(20));
        // fill(random(255), random(255), random(255));
        // fill(255)
        strokeWeight(random(10, 20));
        circle(0, 0, this.dia);

        pop();
    }
}
