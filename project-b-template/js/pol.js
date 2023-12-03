let x, y
let img1, img2, img3, img4
let centerX = 130
let centerY = 130
let theWidth = 210
let theHeight = 260
let centerX1 = 150
let centerY1 = 100
let changedWidth = 250
let changedHeight = 210
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/pol1.jpg");
    img2 = loadImage("js/pics/pol2.jpg");
    img3 = loadImage("js/pics/pol3.jpg");
    img4 = loadImage("js/pics/pol4.jpg");
    mySound = loadSound("js/sound/pol.wav");
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
        NormalPol()
    }
    else {
        InnerEmotionPol()
    }

}

function NormalPol() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionPol() {
    if (frameCount % 120 < 50) {
        image(img3, centerX1, centerY1, changedWidth, changedHeight);
    }
    else {
        image(img4, centerX1, centerY1, changedWidth, changedHeight);
    }

}

function ChangePol() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "pol");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}