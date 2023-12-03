let x, y
let img1, img2, img3
let centerX = 130
let centerY = 140
let theWidth = 220
let theHeight = 240
let changedWidth = 240
let changedHeight = 260
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/mom1.jpg");
    img2 = loadImage("js/pics/mom2.jpg");
    img3 = loadImage("js/pics/mom3.jpg");
    mySound = loadSound("js/sound/mom.wav");
}

function setup() {
    createCanvas(300, 300);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalMom()
    }
    else {
        InnerEmotionMom()
    }

}

function NormalMom() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionMom() {
    image(img3, centerX, centerY, changedWidth, changedHeight);
}

function ChangeMom() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "mom");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}