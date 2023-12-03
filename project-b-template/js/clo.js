let x, y
let img1, img2, img3, img4, img5, img6
let centerX = 140
let centerY = 140
let theWidth = 220
let theHeight = 250
let changedWidth = 240
let changedHeight = 270
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/clo1.jpg");
    img2 = loadImage("js/pics/clo2.jpg");
    img3 = loadImage("js/pics/clo3.jpg");
    img4 = loadImage("js/pics/clo4.jpg");
    img5 = loadImage("js/pics/clo5.jpg");
    img6 = loadImage("js/pics/clo6.jpg");
    mySound = loadSound("js/sound/clo.mp3");
}

function setup() {
    createCanvas(300, 300);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
    img3.filter(THRESHOLD);
    img4.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalClo()
    }
    else {
        InnerEmotionClo()
    }

}

function NormalClo() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 120) {
        image(img3, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img4, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionClo() {
    if (frameCount % 90 <= 45) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img6, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeClo() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "clo");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}