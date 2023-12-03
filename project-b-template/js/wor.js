let x, y
let img1, img2, img3
let centerX = 130
let centerY = 130
let theWidth = 220
let theHeight = 220
let changedWidth = 240
let changedHeight = 240
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/wor1.jpg");
    img2 = loadImage("js/pics/wor2.jpg");
    img3 = loadImage("js/pics/wor3.jpg");
    mySound = loadSound("js/sound/wor.wav");
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
        NormalWor()
    }
    else {
        InnerEmotionWor()
    }

}

function NormalWor() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionWor() {
    image(img3, centerX, centerY, changedWidth, changedHeight);
}

function ChangeWor() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "wor");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}